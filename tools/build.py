#!/usr/bin/env python3
"""
tools/build.py
==============
One command to rule them all. Run this after writing/editing any .md file in
content/articles/ and it will:

  1. Parse every .md file's frontmatter + body
  2. Update content/articles-manifest.json  (add new, update changed, keep removed)
  3. Generate / overwrite static/articles/<slug>.html for each article

Usage:
    python3 tools/build.py            # process all articles
    python3 tools/build.py --clean    # also remove orphaned HTML + manifest entries
                                      # for .md files that no longer exist

Workflow:
    1. Create content/articles/my-new-article.md
    2. Run: python3 tools/build.py
    3. git add . && git commit -m "new article: my-new-article" && git push

Requirements: Python 3.6+ (stdlib only — no pip installs needed)
"""

import json, re, sys
from pathlib import Path
from datetime import date

# ── Paths ─────────────────────────────────────────────────────
ROOT          = Path(__file__).parent.parent
ARTICLES_DIR  = ROOT / 'content' / 'articles'
MANIFEST_PATH = ROOT / 'content' / 'articles-manifest.json'
HTML_OUT_DIR  = ROOT / 'static' / 'articles'

# ── Helpers ───────────────────────────────────────────────────

def parse_md(raw: str):
    """Split a markdown file into frontmatter dict + body string."""
    fm = {}
    body = raw
    m = re.match(r'^---\n([\s\S]*?)\n---\n?', raw)
    if m:
        body = raw[m.end():].strip()
        for line in m.group(1).split('\n'):
            colon = line.find(':')
            if colon == -1:
                continue
            k = line[:colon].strip()
            v = line[colon + 1:].strip()
            fm[k] = v
    return fm, body


def estimate_readtime(body: str) -> str:
    """Estimate reading time based on ~200 words per minute."""
    words = len(body.split())
    minutes = max(1, round(words / 200))
    return f"{minutes} menit"


def build_entry(md_path: Path) -> dict:
    """Parse one .md file and return a complete manifest entry dict."""
    article_id = md_path.stem
    raw        = md_path.read_text(encoding='utf-8')
    fm, body   = parse_md(raw)

    excerpt = fm.get('excerpt', '')
    if not excerpt:
        # Auto-generate from first non-empty body line, capped at 160 chars
        first_line = next((l.strip() for l in body.split('\n') if l.strip() and not l.startswith('#')), '')
        excerpt = first_line[:160] + ('...' if len(first_line) > 160 else '')

    return {
        'id':               article_id,
        'file':             f'content/articles/{md_path.name}',
        'title':            fm.get('title', article_id),
        'author':           fm.get('author', 'Tim OSIS'),
        'date':             fm.get('date_iso', str(date.today())),
        'date_display':     fm.get('date', ''),
        'readtime':         fm.get('readtime', estimate_readtime(body)),
        'cover':            fm.get('cover', ''),
        'cover_caption':    fm.get('cover_caption', ''),
        'category':         fm.get('category', 'Umum').lower(),
        'category_display': fm.get('category', 'Umum'),
        'excerpt':          excerpt,
        'featured':         fm.get('featured', 'false').lower() == 'true',
        'body':             body,
    }


def make_html(article_id: str) -> str:
    """Generate the minimal HTML shell for a given article id."""
    return f"""<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artikel - OSIS SMKN 68 Jakarta</title>
    <link rel="icon" href="../../img/icon.png">
    <link rel="stylesheet" href="../../css/style.css">
</head>
<body>

    <div id="nav-placeholder"></div>

    <main class="single-reading-view">
        <div id="article-render-target" data-article-id="{article_id}">
            <div class="reading-content-wrapper">
                <p style="color: var(--text-muted); padding: 2rem 0">Memuat artikel...</p>
            </div>
        </div>
    </main>

    <div id="footer-placeholder"></div>

    <script type="module" src="../../js/app.js"></script>
</body>
</html>
"""

# ── Main ──────────────────────────────────────────────────────

def main():
    clean_mode = '--clean' in sys.argv

    # Load existing manifest (or start fresh)
    if MANIFEST_PATH.exists():
        with open(MANIFEST_PATH, 'r', encoding='utf-8') as f:
            manifest: list = json.load(f)
    else:
        manifest = []

    # Index existing manifest by id for fast lookup
    manifest_map: dict = {e['id']: e for e in manifest}

    # Scan all .md files
    md_files = sorted(ARTICLES_DIR.glob('*.md'))
    if not md_files:
        print("No .md files found in content/articles/")
        return

    HTML_OUT_DIR.mkdir(parents=True, exist_ok=True)

    added   = []
    updated = []

    md_ids = set()
    for md_path in md_files:
        article_id = md_path.stem
        md_ids.add(article_id)

        new_entry = build_entry(md_path)

        if article_id in manifest_map:
            manifest_map[article_id] = new_entry
            updated.append(article_id)
        else:
            manifest_map[article_id] = new_entry
            added.append(article_id)

        # Generate / overwrite the HTML shell
        html_path = HTML_OUT_DIR / f'{article_id}.html'
        html_path.write_text(make_html(article_id), encoding='utf-8')

    # ── Optional cleanup: remove entries for deleted .md files ──
    removed = []
    if clean_mode:
        orphans = [aid for aid in manifest_map if aid not in md_ids]
        for aid in orphans:
            del manifest_map[aid]
            orphan_html = HTML_OUT_DIR / f'{aid}.html'
            if orphan_html.exists():
                orphan_html.unlink()
            removed.append(aid)

    # Re-build manifest list sorted by date descending (newest first)
    final_manifest = sorted(
        manifest_map.values(),
        key=lambda e: e.get('date', '1970-01-01'),
        reverse=True
    )

    # Save manifest
    with open(MANIFEST_PATH, 'w', encoding='utf-8') as f:
        json.dump(final_manifest, f, ensure_ascii=False, indent=2)

    # ── Summary ───────────────────────────────────────────────
    print(f"\n{'─' * 52}")
    print(f"  Articles scanned : {len(md_files)}")
    if added:
        print(f"  NEW  (+{len(added):<3})       : {', '.join(added)}")
    if updated:
        print(f"  Updated          : {', '.join(updated)}")
    if removed:
        print(f"  Removed (--clean): {', '.join(removed)}")
    print(f"  Manifest saved   → content/articles-manifest.json")
    print(f"  HTML pages saved → static/articles/")
    print(f"{'─' * 52}")
    print()
    print("  Next step:")
    print("    git add . && git commit -m 'update articles' && git push")
    print()


if __name__ == '__main__':
    main()
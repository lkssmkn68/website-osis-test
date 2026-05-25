"""
tools/build-manifest.py
=======================
Automatically detects new/updated .md files in content/articles/,
updates content/articles-manifest.json, and generates the HTML page
in static/articles/ for each article.

Usage:
    python3 tools/build-manifest.py

Requirements: Python 3 (no extra packages needed)
"""

import json, re, sys
from pathlib import Path
from datetime import date

ROOT         = Path(__file__).parent.parent
ARTICLES_DIR = ROOT / 'content' / 'articles'
MANIFEST_PATH = ROOT / 'content' / 'articles-manifest.json'
HTML_OUT_DIR = ROOT / 'static' / 'articles'


# ── Helpers ───────────────────────────────────────────────────

def parse_md(raw):
    """Split a markdown file into frontmatter dict + body string."""
    fm = {}
    body = raw
    m = re.match(r'^---\n([\s\S]*?)\n---\n', raw)
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


def slugify(text):
    """Turn a title into a safe filename slug."""
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s]+', '-', text.strip())
    return text


def make_html(article_id):
    """Generate the HTML page content for a given article id."""
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
    # Load existing manifest (or start fresh)
    if MANIFEST_PATH.exists():
        with open(MANIFEST_PATH, 'r', encoding='utf-8') as f:
            manifest = json.load(f)
    else:
        manifest = []

    # Build a set of already-known ids for quick lookup
    known_ids = {entry['id'] for entry in manifest}

    # Scan all .md files in content/articles/
    md_files = sorted(ARTICLES_DIR.glob('*.md'))
    if not md_files:
        print("No .md files found in content/articles/")
        return

    HTML_OUT_DIR.mkdir(parents=True, exist_ok=True)

    added   = []
    updated = []

    for md_path in md_files:
        article_id = md_path.stem          # filename without .md
        raw        = md_path.read_text(encoding='utf-8')
        fm, body   = parse_md(raw)

        # ── Build the manifest entry ──────────────────────────
        entry = {
            'id':               article_id,
            'file':             f'content/articles/{md_path.name}',
            'title':            fm.get('title', article_id),
            'author':           fm.get('author', 'Tim OSIS'),
            'date':             fm.get('date_iso', str(date.today())),
            'date_display':     fm.get('date', ''),
            'readtime':         fm.get('readtime', ''),
            'cover':            fm.get('cover', ''),
            'cover_caption':    fm.get('cover_caption', ''),
            'category':         fm.get('category', 'umum').lower(),
            'category_display': fm.get('category', 'Umum'),
            'excerpt':          fm.get('excerpt', body[:120].replace('\n', ' ') + '...'),
            'featured':         fm.get('featured', 'false').lower() == 'true',
            'body':             body,
        }

        if article_id in known_ids:
            # Update existing entry in-place (preserve field order)
            for i, existing in enumerate(manifest):
                if existing['id'] == article_id:
                    manifest[i] = entry
                    break
            updated.append(article_id)
        else:
            # New article — append to manifest
            manifest.append(entry)
            known_ids.add(article_id)
            added.append(article_id)

        # ── Generate / overwrite the HTML page ───────────────
        html_path = HTML_OUT_DIR / f'{article_id}.html'
        html_path.write_text(make_html(article_id), encoding='utf-8')

    # Save manifest
    with open(MANIFEST_PATH, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)

    # ── Summary ───────────────────────────────────────────────
    print(f"\n{'─'*50}")
    print(f"  Articles scanned : {len(md_files)}")
    if added:
        print(f"  NEW  (+{len(added)})        : {', '.join(added)}")
    if updated:
        print(f"  Updated          : {', '.join(updated)}")
    print(f"  Manifest saved   : content/articles-manifest.json")
    print(f"  HTML pages saved : static/articles/")
    print(f"{'─'*50}")
    print("\nNext step: commit and push all changed files to GitHub.\n")


if __name__ == '__main__':
    main()

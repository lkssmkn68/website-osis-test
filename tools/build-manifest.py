"""
tools/build-manifest.py
=======================
Run this script whenever you add or edit an article .md file.
It reads all .md files in content/articles/ and updates
content/articles-manifest.json with the embedded body content.

Usage:
    python3 tools/build-manifest.py

Requirements: Python 3 (no extra packages needed)
"""

import json, re, os, sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
ARTICLES_DIR = ROOT / 'content' / 'articles'
MANIFEST_PATH = ROOT / 'content' / 'articles-manifest.json'


def parse_md(raw):
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


def main():
    if not MANIFEST_PATH.exists():
        print(f"ERROR: {MANIFEST_PATH} not found. Create it first.")
        sys.exit(1)

    with open(MANIFEST_PATH, 'r', encoding='utf-8') as f:
        manifest = json.load(f)

    updated = 0
    for entry in manifest:
        md_path = ROOT / entry.get('file', '')
        if not md_path.exists():
            print(f"  SKIP {entry['id']}: file not found at {md_path}")
            continue

        raw = md_path.read_text(encoding='utf-8')
        fm, body = parse_md(raw)

        # Update fields from frontmatter
        entry['title']            = fm.get('title', entry.get('title', entry['id']))
        entry['author']           = fm.get('author', entry.get('author', 'Tim OSIS'))
        entry['date_display']     = fm.get('date', '')
        entry['readtime']         = fm.get('readtime', '')
        entry['cover']            = fm.get('cover', entry.get('cover', ''))
        entry['cover_caption']    = fm.get('cover_caption', '')
        entry['category_display'] = fm.get('category', entry.get('category', ''))

        # Embed the markdown body
        entry['body'] = body
        updated += 1
        print(f"  OK  {entry['id']} ({len(body)} chars)")

    with open(MANIFEST_PATH, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)

    print(f"\nDone. Updated {updated}/{len(manifest)} articles in {MANIFEST_PATH.name}")
    print("Commit and push content/articles-manifest.json to GitHub.")


if __name__ == '__main__':
    main()

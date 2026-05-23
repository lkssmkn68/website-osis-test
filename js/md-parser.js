/**
 * md-parser.js
 * Lightweight Markdown parser for OSIS article system.
 * Supports: frontmatter, headings, paragraphs, bold, italic,
 * blockquote, unordered lists, ordered lists, inline images with captions,
 * and horizontal rules.
 *
 * HOW TO WRITE AN ARTICLE:
 * ─────────────────────────
 * Start the file with a "frontmatter" block (between --- lines).
 * Supported frontmatter keys:
 *   title, category, author, date, readtime, cover, cover_caption
 *
 * Then write your article body using simple Markdown:
 *   ## Heading 2         →  large section heading
 *   ### Heading 3        →  sub-section heading
 *   **bold text**        →  bold
 *   *italic text*        →  italic
 *   - item               →  bullet list item
 *   1. item              →  numbered list item
 *   > quote text         →  blockquote / pull quote
 *   ![alt|caption](url) →  image with optional caption (use | to split alt from caption)
 *   ---                  →  horizontal divider
 */

export function parseFrontmatter(raw) {
    const fm = {};
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
    let body = raw;
    if (fmMatch) {
        body = raw.slice(fmMatch[0].length).trim();
        fmMatch[1].split('\n').forEach(line => {
            const colon = line.indexOf(':');
            if (colon === -1) return;
            const key = line.slice(0, colon).trim();
            const val = line.slice(colon + 1).trim();
            fm[key] = val;
        });
    }
    return { fm, body };
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function inlineFormat(text) {
    // Bold + Italic combined
    text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    // Bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Inline code
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    return text;
}

export function parseMarkdown(markdown) {
    const lines = markdown.split('\n');
    const html = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i];

        // ── Headings ──────────────────────────────────
        if (line.startsWith('### ')) {
            html.push(`<h3>${inlineFormat(line.slice(4))}</h3>`);
            i++; continue;
        }
        if (line.startsWith('## ')) {
            html.push(`<h2>${inlineFormat(line.slice(3))}</h2>`);
            i++; continue;
        }
        if (line.startsWith('# ')) {
            html.push(`<h1>${inlineFormat(line.slice(2))}</h1>`);
            i++; continue;
        }

        // ── Horizontal Rule ───────────────────────────
        if (line.trim() === '---') {
            html.push('<hr>');
            i++; continue;
        }

        // ── Blockquote ────────────────────────────────
        if (line.startsWith('> ')) {
            html.push(`<blockquote>${inlineFormat(line.slice(2))}</blockquote>`);
            i++; continue;
        }

        // ── Unordered list ────────────────────────────
        if (line.startsWith('- ')) {
            html.push('<ul>');
            while (i < lines.length && lines[i].startsWith('- ')) {
                html.push(`<li>${inlineFormat(lines[i].slice(2))}</li>`);
                i++;
            }
            html.push('</ul>');
            continue;
        }

        // ── Ordered list ──────────────────────────────
        if (/^\d+\. /.test(line)) {
            html.push('<ol>');
            while (i < lines.length && /^\d+\. /.test(lines[i])) {
                html.push(`<li>${inlineFormat(lines[i].replace(/^\d+\. /, ''))}</li>`);
                i++;
            }
            html.push('</ol>');
            continue;
        }

        // ── Image with optional caption ───────────────
        // Syntax: ![alt text|Caption text here](url)
        const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (imgMatch) {
            const [altRaw, url] = [imgMatch[1], imgMatch[2]];
            const [alt, caption] = altRaw.includes('|')
                ? altRaw.split('|').map(s => s.trim())
                : [altRaw, ''];
            if (caption) {
                html.push(`<figure class="article-inline-image"><img src="${url}" alt="${escapeHtml(alt)}" loading="lazy"><figcaption>${escapeHtml(caption)}</figcaption></figure>`);
            } else {
                html.push(`<figure class="article-inline-image"><img src="${url}" alt="${escapeHtml(alt)}" loading="lazy"></figure>`);
            }
            i++; continue;
        }

        // ── Empty line ────────────────────────────────
        if (line.trim() === '') {
            i++; continue;
        }

        // ── Paragraph ─────────────────────────────────
        // Collect consecutive non-empty, non-special lines as one paragraph
        const paraLines = [];
        while (
            i < lines.length &&
            lines[i].trim() !== '' &&
            !lines[i].startsWith('#') &&
            !lines[i].startsWith('> ') &&
            !lines[i].startsWith('- ') &&
            !/^\d+\. /.test(lines[i]) &&
            !lines[i].startsWith('!') &&
            lines[i].trim() !== '---'
        ) {
            paraLines.push(lines[i]);
            i++;
        }
        if (paraLines.length > 0) {
            html.push(`<p>${inlineFormat(paraLines.join(' '))}</p>`);
        }
    }

    return html.join('\n');
}

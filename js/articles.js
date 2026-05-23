/**
 * articles.js
 * Handles everything related to articles:
 *   - Loading the manifest (content/articles-manifest.json)
 *   - Rendering article cards on articles.html
 *   - Rendering a full article page from a .md file
 *   - Category filtering with correct counts
 */

import { parseFrontmatter, parseMarkdown } from './md-parser.js';

/** Site root — same logic as components.js */
function getSiteRoot() {
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length === 0 || (parts[0] && parts[0].includes('.'))) {
        return origin + '/';
    }
    return origin + '/' + parts[0] + '/';
}

const ROOT = getSiteRoot();

/** Resolve path to content/ folder using absolute ROOT */
function contentPath(rel) {
    return ROOT + 'content/' + rel;
}

/** Format ISO date to human-readable Indonesian */
function formatDate(isoDate) {
    const months = ['Januari','Februari','Maret','April','Mei','Juni',
                    'Juli','Agustus','September','Oktober','November','Desember'];
    const [y, m, d] = isoDate.split('-').map(Number);
    return `${d} ${months[m - 1]} ${y}`;
}

/** Build URL to a single article page using absolute ROOT */
function articleUrl(id) {
    return ROOT + 'static/articles/' + id + '.html';
}

/** Load the articles manifest JSON */
async function loadManifest() {
    const res = await fetch(contentPath('articles-manifest.json'));
    if (!res.ok) throw new Error('Could not load articles manifest');
    return res.json();
}

// ─────────────────────────────────────────────────────────────
// ARTICLES LIST PAGE (articles.html)
// ─────────────────────────────────────────────────────────────

function renderFeaturedCard(article) {
    return `
    <div class="featured-news-hero-card" data-category="${article.category}">
        <div class="featured-hero-img-box">
            <img src="${article.cover}" alt="${article.title}" loading="lazy">
        </div>
        <div class="featured-hero-body">
            <span class="news-date">SOROTAN UTAMA • ${formatDate(article.date)}</span>
            <h2>${article.title}</h2>
            <p>${article.excerpt}</p>
            <a href="${articleUrl(article.id)}" class="featured-read-btn">Baca Artikel Utama</a>
        </div>
    </div>`;
}

function renderArticleCard(article) {
    return `
    <article class="news-card" data-category="${article.category}">
        <div class="news-image-wrapper">
            <img src="${article.cover}" alt="${article.title}" class="news-image" loading="lazy">
        </div>
        <div class="news-body">
            <span class="news-date">${formatDate(article.date)}</span>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <a href="${articleUrl(article.id)}" class="news-link">Baca Selengkapnya →</a>
        </div>
    </article>`;
}

function buildCategorySidebar(articles, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Count articles per category
    const counts = {};
    articles.forEach(a => {
        counts[a.category] = (counts[a.category] || 0) + 1;
    });

    const total = articles.length;
    let html = `
        <li><a href="#" class="category-btn active" data-filter="all">
            Semua Kategori <span>${total}</span>
        </a></li>`;

    Object.entries(counts).forEach(([cat, count]) => {
        const label = cat.charAt(0).toUpperCase() + cat.slice(1);
        html += `
        <li><a href="#" class="category-btn" data-filter="${cat}">
            ${label} <span>${count}</span>
        </a></li>`;
    });

    container.innerHTML = html;
    initCategoryFilter(articles);
}

function initCategoryFilter(articles) {
    const buttons = document.querySelectorAll('.category-btn');
    const feedTitle = document.getElementById('feed-title-text');

    buttons.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            document.querySelectorAll('[data-category]').forEach(el => {
                const match = filter === 'all' || el.dataset.category === filter;
                el.style.display = match
                    ? (el.classList.contains('featured-news-hero-card') ? 'grid' : '')
                    : 'none';
            });

            if (feedTitle) {
                feedTitle.textContent = filter === 'all'
                    ? 'Berita Terkini'
                    : `Kategori: ${btn.childNodes[0].textContent.trim()}`;
            }
        });
    });
}

export async function initArticleListPage() {
    const featuredContainer = document.getElementById('featured-article-container');
    const gridContainer     = document.getElementById('articles-grid-container');
    const categoryListId    = 'category-list';

    if (!gridContainer) return; // not on articles.html

    try {
        const manifest = await loadManifest();

        const featured = manifest.filter(a => a.featured);
        const regular  = manifest.filter(a => !a.featured);

        if (featuredContainer) {
            featuredContainer.innerHTML = featured.map(renderFeaturedCard).join('');
        }
        gridContainer.innerHTML = regular.map(renderArticleCard).join('');

        buildCategorySidebar(manifest, categoryListId);

    } catch (err) {
        console.error('Articles failed to load:', err);
        if (gridContainer) {
            gridContainer.innerHTML = '<p style="color:red">Gagal memuat artikel. Pastikan server berjalan (jangan buka file:// langsung).</p>';
        }
    }
}

// ─────────────────────────────────────────────────────────────
// SINGLE ARTICLE PAGE (static/articles/[id].html)
// ─────────────────────────────────────────────────────────────

export async function initArticlePage() {
    const container = document.getElementById('article-render-target');
    if (!container) return;

    // Get article ID from data attribute or URL
    const articleId = container.dataset.articleId
        || window.location.pathname.split('/').pop().replace('.html', '');

    try {
        const manifest = await loadManifest();
        const meta = manifest.find(a => a.id === articleId);

        if (!meta) throw new Error(`Article "${articleId}" not found in manifest`);

        // Load the .md file
        const mdRes = await fetch(contentPath(meta.file.replace('content/', '')));
        if (!mdRes.ok) throw new Error(`Could not load ${meta.file}`);
        const raw = await mdRes.text();

        const { fm, body } = parseFrontmatter(raw);
        const bodyHtml = parseMarkdown(body);

        // Update page title
        document.title = `${fm.title || meta.title} — OSIS SMKN 68 Jakarta`;

        // Render article
        container.innerHTML = `
            <div class="reading-content-wrapper">
                <a href="../articles.html" class="back-to-feed-link">← Kembali ke Artikel</a>
                <article>
                    <header class="article-header">
                        <span class="article-category">${fm.category || meta.category}</span>
                        <h1>${fm.title || meta.title}</h1>
                        <div class="article-meta">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(fm.author || meta.author)}&background=007bff&color=fff"
                                 alt="${fm.author || meta.author}" class="author-avatar">
                            <div class="meta-details">
                                <span class="author-name">Ditulis oleh ${fm.author || meta.author}</span>
                                <span class="publish-date">${fm.date || formatDate(meta.date)}${fm.readtime ? ` • Waktu baca: ${fm.readtime}` : ''}</span>
                            </div>
                        </div>
                    </header>

                    ${fm.cover ? `
                    <figure class="article-featured-image">
                        <img src="${fm.cover}" alt="${fm.title || meta.title}" loading="lazy">
                        ${fm.cover_caption ? `<figcaption>${fm.cover_caption}</figcaption>` : ''}
                    </figure>` : ''}

                    <div class="article-content">
                        ${bodyHtml}
                    </div>
                </article>
            </div>`;

    } catch (err) {
        console.error('Article render failed:', err);
        container.innerHTML = `
            <div class="reading-content-wrapper">
                <a href="../articles.html" class="back-to-feed-link">← Kembali ke Artikel</a>
                <p style="color:red; margin-top: 2rem;">Gagal memuat artikel: ${err.message}</p>
            </div>`;
    }
}

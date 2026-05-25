/**
 * home.js
 * Hero image slider + dynamic "Berita Terkini" for index.html.
 * The news section is auto-populated from content/articles-manifest.json —
 * no need to edit index.html when new articles are added.
 */

function getSiteRoot() {
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length === 0 || (parts[0] && parts[0].includes('.'))) {
        return origin + '/';
    }
    return origin + '/' + parts[0] + '/';
}

// ─── Hero Slider ──────────────────────────────────────────────

export function initHomeSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;

    let current = 0;
    slides[0].classList.add('active');

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 5000);
}

// ─── Berita Terkini ───────────────────────────────────────────

function renderNewsCard(article, ROOT) {
    const coverHtml = article.cover
        ? `<img src="${article.cover}" alt="${article.title}" class="news-image" loading="lazy">`
        : `<div class="news-image" style="background:var(--bg-main);display:flex;align-items:center;justify-content:center;color:var(--text-muted);font-size:13px;">Tanpa Gambar</div>`;

    return `
    <article class="news-card">
        <div class="news-image-wrapper">
            ${coverHtml}
        </div>
        <div class="news-body">
            <span class="news-date">${article.date_display || article.date}</span>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <a href="${ROOT}static/articles/${article.id}.html" class="news-link">Baca Selengkapnya →</a>
        </div>
    </article>`;
}

export async function initHomeNews() {
    const grid = document.getElementById('home-news-grid');
    if (!grid) return;

    const ROOT = getSiteRoot();

    try {
        const res = await fetch(`${ROOT}content/articles-manifest.json`);
        if (!res.ok) throw new Error('Manifest not found');
        const articles = await res.json();

        // Show the 3 most recent articles (sorted by date descending)
        const recent = [...articles]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);

        if (recent.length === 0) {
            grid.innerHTML = '<p style="color:var(--text-muted)">Belum ada artikel.</p>';
            return;
        }

        grid.innerHTML = recent.map(a => renderNewsCard(a, ROOT)).join('');
    } catch (err) {
        console.error('Home news failed to load:', err);
        // Silently fail on home page — fallback content below stays visible
        grid.innerHTML = '<p style="color:var(--text-muted)">Gagal memuat berita terkini.</p>';
    }
}
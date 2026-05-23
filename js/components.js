/**
 * components.js
 * Injects shared navigation and footer into every page.
 *
 * Uses absolute URLs based on the detected site root so it works
 * correctly on GitHub Pages (https://user.github.io/repo-name/),
 * local dev servers, and any other host — no matter the repo name.
 */

/**
 * Detects the root URL of the site.
 * - GitHub Pages: https://user.github.io/repo-name/  → root = origin/repo-name/
 * - localhost:8000 with files at root                 → root = origin/
 * - localhost:8000/subfolder/                         → root = origin/subfolder/
 *
 * The trick: index.html always lives at the repo root, which is the
 * first path segment on GitHub Pages. We detect this by checking if
 * the first path part contains a dot (meaning it's a file, not a folder).
 */
function getSiteRoot() {
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(Boolean);

    // True root (e.g. localhost with index.html at /)
    if (parts.length === 0 || (parts[0] && parts[0].includes('.'))) {
        return origin + '/';
    }

    // GitHub Pages or subfolder: first segment is the repo/folder name
    return origin + '/' + parts[0] + '/';
}

const ROOT = getSiteRoot();

const NAV_LINKS = [
    { href: 'static/about.html',    label: 'Tentang Kami' },
    { href: 'static/proker.html',   label: 'Program Kerja' },
    { href: 'static/struktur.html', label: 'Struktur' },
    { href: 'static/articles.html', label: 'Artikel' },
    { href: 'static/contacts.html', label: 'Contact' },
];

function getCurrentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
}

export function renderNav() {
    const current = getCurrentPage();

    const linksHtml = NAV_LINKS.map(link => {
        const pageFile = link.href.split('/').pop(); // e.g. "about.html"
        const isActive = current === pageFile ? 'active' : '';
        return `<a href="${ROOT}${link.href}" class="nav-btn ${isActive}">${link.label}</a>`;
    }).join('');

    return `
    <nav class="topbar">
        <div class="logo">
            <a href="${ROOT}index.html">OSIS SMKN 68 Jakarta</a>
        </div>
        <div class="nav-links">
            ${linksHtml}
        </div>
    </nav>`;
}

export function renderFooter() {
    return `
    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4>OSIS SMKN 68 Jakarta</h4>
                <p>Jl. Penganten Ali RT 09 RW 06,<br>Jakarta Timur, DKI Jakarta</p>
            </div>
            <div class="footer-section">
                <h4>Kontak</h4>
                <p>Email: osissmkn68jakarta@gmail.com</p>
                <p>Telepon: +62 896-1672-7118 (Mutia)</p>
                <p>Jam Kerja: Senin–Jumat, 09.00–17.00 WIB</p>
            </div>
            <div class="footer-section socials">
                <h4>Ikuti Kami</h4>
                <a href="https://www.instagram.com/osissmkn68.jkt/" target="_blank" rel="noopener">Instagram</a>
                <a href="https://www.youtube.com/@OSISSMKN68" target="_blank" rel="noopener">Youtube</a>
                <a href="https://www.tiktok.com/@osissmkn68" target="_blank" rel="noopener">TikTok</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 OSIS SMKN 68 Jakarta. All rights reserved.</p>
        </div>
    </footer>`;
}

export function injectComponents() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = renderNav();

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.outerHTML = renderFooter();
}

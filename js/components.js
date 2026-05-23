/**
 * components.js
 * Injects shared navigation and footer into every page.
 * No more copy-pasting HTML across files.
 *
 * Usage: import './components.js' in any page script.
 * It auto-detects the active page from the current URL.
 */

const NAV_LINKS = [
    { href: 'about.html',    label: 'Tentang Kami' },
    { href: 'proker.html',   label: 'Program Kerja' },
    { href: 'struktur.html', label: 'Struktur' },
    { href: 'articles.html', label: 'Artikel' },
    { href: 'contacts.html', label: 'Contact' },
];

/**
 * Resolves the correct prefix for links based on current page depth.
 * Pages in /static/ → prefix = ''
 * Pages in /static/articles/ → prefix = '../'
 * index.html at root → prefix = 'static/'
 */
function getPathPrefix() {
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path === '/' || path.endsWith('/osis-site/')) {
        return 'static/';
    }
    // Check if we're two levels deep (e.g. /static/articles/xxx.html)
    const parts = path.split('/').filter(Boolean);
    const depth = parts.length;
    if (depth >= 3 || path.includes('/articles/')) {
        return '../';
    }
    return '';
}

function getHomeHref() {
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path === '/' || path.endsWith('/osis-site/')) return 'index.html';
    if (path.includes('/articles/')) return '../../index.html';
    return '../index.html';
}

function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    return filename || 'index.html';
}

export function renderNav() {
    const prefix = getPathPrefix();
    const current = getCurrentPage();

    const linksHtml = NAV_LINKS.map(link => {
        const isActive = current === link.href ? 'active' : '';
        return `<a href="${prefix}${link.href}" class="nav-btn ${isActive}">${link.label}</a>`;
    }).join('');

    return `
    <nav class="topbar">
        <div class="logo">
            <a href="${getHomeHref()}">OSIS SMKN 68 Jakarta</a>
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
    // Nav
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = renderNav();

    // Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.outerHTML = renderFooter();
}

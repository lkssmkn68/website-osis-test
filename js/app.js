/**
 * app.js — Main entry point for OSIS SMKN 68 Jakarta website.
 *
 * Each page imports only what it needs.
 * Shared functionality (nav, footer) is injected automatically by components.js.
 */

import { injectComponents } from './components.js';
import { initArticleListPage, initArticlePage } from './articles.js';
import { renderOsisTree } from './struktur.js';
import { initHomeSlider } from './home.js';

document.addEventListener('DOMContentLoaded', async () => {

    // 1. Always inject shared nav + footer
    injectComponents();

    // 2. Page-specific logic based on filename
    const page = window.location.pathname.split('/').pop() || 'index.html';

    if (page === 'index.html' || page === '') {
        initHomeSlider();
    }

    if (page === 'struktur.html') {
        await renderOsisTree();
    }

    if (page === 'articles.html') {
        await initArticleListPage();
    }

    // Single article pages live in /static/articles/[id].html
    if (document.getElementById('article-render-target')) {
        await initArticlePage();
    }

});

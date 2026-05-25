/**
 * app.js
 * Entry point — injects shared components and boots the correct
 * page module based on the current URL.
 */

import { injectComponents } from './components.js';
import { initHomeSlider, initHomeNews } from './home.js';
import { initArticleListPage, initArticlePage } from './articles.js';
import { renderOsisTree } from './struktur.js';
import { initProkerPage } from './proker.js';

// 1. Inject nav + footer on every page
injectComponents();

// 2. Boot the correct page module
const page = window.location.pathname.split('/').pop() || 'index.html';

if (page === 'index.html' || page === '') {
    initHomeSlider();
    initHomeNews();
} else if (page === 'struktur.html') {
    renderOsisTree();
} else if (page === 'articles.html') {
    initArticleListPage();
} else if (page === 'proker.html') {
    initProkerPage();
} else {
    // Static article pages — static/articles/[id].html
    initArticlePage();
}
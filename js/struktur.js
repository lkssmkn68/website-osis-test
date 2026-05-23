/**
 * struktur.js
 * Renders the OSIS organizational chart from content/osis-data.json.
 * Data is fully separated from logic — edit osis-data.json to update org structure.
 */

function getSiteRoot() {
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length === 0 || (parts[0] && parts[0].includes('.'))) {
        return origin + '/';
    }
    return origin + '/' + parts[0] + '/';
}

function dataPath() {
    return getSiteRoot() + 'content/osis-data.json';
}

function node(nama, jabatan, level = 'main') {
    return `
    <div class="org-node org-node--${level}">
        <div class="org-node__name">${nama}</div>
        <div class="org-node__role">${jabatan}</div>
    </div>`;
}

function connector() {
    return `<div class="org-connector"></div>`;
}

export async function renderOsisTree() {
    const container = document.getElementById('osis-tree-container');
    if (!container) return;

    try {
        const res  = await fetch(dataPath());
        if (!res.ok) throw new Error('Cannot load osis-data.json');
        const data = await res.json();

        let html = '<div class="org-chart">';

        // ── Top chain (Kepsek → Waket) ──────────────────
        html += '<div class="org-col org-col--spine">';
        data.pimpinanAtas.forEach((p, idx) => {
            html += node(p.nama, p.jabatan, 'main');
            if (idx < data.pimpinanAtas.length - 1) html += connector();
        });
        html += '</div>';

        // ── Three-column row: Sekretaris | Koordinator | Bendahara ──
        html += '<div class="org-row org-row--mid">';

        // Left wing
        html += '<div class="org-col org-col--wing">';
        data.sekretaris.forEach(s => html += node(s.nama, s.jabatan, 'wing'));
        html += '</div>';

        // Center: Koordinator + Sekbid branches
        html += '<div class="org-col org-col--center">';
        html += node(data.koordinator.nama, data.koordinator.jabatan, 'main');
        html += connector();

        // Sekbid row
        html += '<div class="org-row org-row--sekbid">';
        data.sekbid.forEach(sek => {
            html += '<div class="org-col org-col--sekbid">';
            html += node(sek.ketua, `Ketua Sekbid ${sek.nama}`, 'sekbid');
            sek.departemen.forEach(dept => {
                html += `
                <div class="org-dept">
                    <div class="org-dept__name">${dept.nama}</div>
                    <div class="org-dept__members">${dept.anggota.join('<br>')}</div>
                </div>`;
            });
            html += '</div>';
        });
        html += '</div>'; // .org-row--sekbid

        html += '</div>'; // .org-col--center

        // Right wing
        html += '<div class="org-col org-col--wing">';
        data.bendahara.forEach(b => html += node(b.nama, b.jabatan, 'wing'));
        html += '</div>';

        html += '</div>'; // .org-row--mid
        html += '</div>'; // .org-chart

        container.innerHTML = html;

    } catch (err) {
        console.error('Org tree failed:', err);
        container.innerHTML = `<p style="color:red;padding:2rem">Gagal memuat data struktur: ${err.message}</p>`;
    }
}

function renderProjects() {
  const grid = document.getElementById('projectGrid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  grid.innerHTML = PROJECTS.map((p) => {
    const stack = (p.stack || [])
      .map((s) => `<span>${escapeHtml(s)}</span>`)
      .join('');

    const link = p.github
      ? `<a class="project-link" href="${escapeAttr(p.github)}" target="_blank" rel="noopener">View on GitHub &rarr;</a>`
      : `<span class="project-link disabled">Private</span>`;

    return `
      <article class="project-card">
        <span class="corner tl"></span>
        <span class="corner tr"></span>
        <span class="corner bl"></span>
        <span class="corner br"></span>
        <span class="project-tag">${escapeHtml(p.tag || '')}</span>
        <h3>${escapeHtml(p.title || '')}</h3>
        <p>${escapeHtml(p.description || '')}</p>
        <div class="project-stack">${stack}</div>
        ${link}
      </article>
    `;
  }).join('');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
function escapeAttr(str) {
  return String(str).replace(/"/g, '&quot;');
}


function initCoordReadout() {
  const el = document.getElementById('coordReadout');
  if (!el) return;
  window.addEventListener('mousemove', (e) => {
    const lat = (90 - (e.clientY / window.innerHeight) * 180).toFixed(4);
    const lon = ((e.clientX / window.innerWidth) * 360 - 180).toFixed(4);
    el.textContent = `LAT ${lat} \u00B7 LON ${lon}`;
  });
}


function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initCoordReadout();
  setYear();
});

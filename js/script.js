/* Virginia Edwards Design — small site scripts */

// Live date stamp on the home page: dd.mm.yy
function startHomeDate() {
  const el = document.getElementById('home-date');
  if (!el) return;
  const tick = () => {
    const d = new Date();
    const p = (n) => String(n).padStart(2, '0');
    el.textContent = `${p(d.getDate())}.${p(d.getMonth() + 1)}.${p(d.getFullYear() % 100)}`;
  };
  tick();
  setInterval(tick, 1000 * 30);
}

// Live clock on the contact page: hh:mm:ss
function startContactClock() {
  const el = document.getElementById('contact-clock');
  if (!el) return;
  const tick = () => {
    const d = new Date();
    const p = (n) => String(n).padStart(2, '0');
    el.textContent = `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
  };
  tick();
  setInterval(tick, 1000);
}

// Build the repeated "VIRGINIA EDWARDS" hero pattern on the home page.
function buildHeroPattern() {
  const host = document.getElementById('hero-pattern');
  if (!host) return;
  const words = ['VIRGINIA', 'EDWARDS'];
  const count = 40;
  for (let i = 0; i < count; i++) {
    const tag = document.createElement('div');
    tag.className = 'hero-tag';
    tag.textContent = words[i % 2];
    const rot = (Math.random() * 28 - 14).toFixed(1);
    const flip = Math.random() > 0.55 ? -1 : 1;
    tag.style.setProperty('--r', rot + 'deg');
    tag.style.setProperty('--sx', flip);
    host.appendChild(tag);
  }
}

// If an image file isn't in the folder yet, show a tidy labelled box instead
// of a broken-image icon. Tries .png automatically before giving up.
function handleMissingImage(img) {
  const slot = img.getAttribute('data-slot') || img.getAttribute('src');
  const cur = img.getAttribute('src') || '';
  if (/\.jpg$/i.test(cur) && img.dataset.triedPng !== '1') {
    img.dataset.triedPng = '1';
    img.src = cur.replace(/\.jpg$/i, '.png');
    return;
  }
  if (!img.parentNode) return;
  const ph = document.createElement('div');
  ph.className = 'placeholder';
  ph.innerHTML = '<span>add ' + slot + '</span>';
  img.parentNode.replaceChild(ph, img);
}

function wireImageFallbacks() {
  document.querySelectorAll('img.site-img').forEach((img) => {
    img.addEventListener('error', () => handleMissingImage(img));
    // catch images that already failed before this script ran
    if (img.complete && img.naturalWidth === 0) handleMissingImage(img);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  startHomeDate();
  startContactClock();
  buildHeroPattern();
  wireImageFallbacks();
});

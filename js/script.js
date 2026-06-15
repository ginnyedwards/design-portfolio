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

document.addEventListener('DOMContentLoaded', () => {
  startHomeDate();
  startContactClock();
  buildHeroPattern();
});

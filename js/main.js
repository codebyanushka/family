/* ===== VALENTINE PROPOSAL - Main JavaScript ===== */

// Console magic words
const MAGIC_WORDS = ['Together', 'Forever'];
MAGIC_WORDS.forEach((word, i) => {
  setTimeout(() => console.log(`%c✨ ${word} ✨`, 'color: #ff69b4; font-size: 14px;'), i * 200);
});

// ===== HEART RAIN =====
function createHeartRain(container = document.body, count = 30) {
  const hearts = ['❤️', '💕', '💖', '💗', '💘', '💝', '💞'];
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (5 + Math.random() * 10) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(heart);
  }
}

// ===== SPARKLES =====
function createSparkles(container = document.body, count = 20) {
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(sparkle);
  }
}

// ===== MAGIC GLOW =====
function createMagicGlow() {
  const glow = document.createElement('div');
  glow.className = 'magic-glow';
  glow.style.background = 'radial-gradient(circle, #ff69b4, #8b5cf6)';
  glow.style.left = '50%';
  glow.style.top = '50%';
  glow.style.transform = 'translate(-50%, -50%)';
  document.body.insertBefore(glow, document.body.firstChild);
}

// ===== INIT GLOBAL EFFECTS =====
function initGlobalEffects() {
  const rainContainer = document.createElement('div');
  rainContainer.className = 'heart-rain';
  document.body.insertBefore(rainContainer, document.body.firstChild);
  createHeartRain(rainContainer);
  createSparkles(rainContainer);
  createMagicGlow();
}

// ===== MAGIC INPUT (kept minimal) =====
const SPELLS = {
  love: () => {
    const container = document.querySelector('.heart-rain') || document.body;
    for (let i = 0; i < 40; i++) {
      const h = document.createElement('div');
      h.className = 'heart';
      h.textContent = '❤️';
      h.style.left = Math.random() * 100 + 'vw';
      h.style.animation = 'fall 3s linear forwards';
      container.appendChild(h);
      setTimeout(() => h.remove(), 3000);
    }
  }
};

function initMagicInput() {
  const container = document.querySelector('.magic-input-container');
  if (!container) return;
  const input = container.querySelector('.magic-input-box');
  if (!input) return;

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const val = input.value.trim().toLowerCase();
      if (SPELLS[val]) SPELLS[val]();
      input.value = '';
    }
  });
}

// ===== PAGE NAV (Only 1 & 2) =====
function initPageNav() {
  const nav = document.createElement('nav');
  nav.className = 'page-nav';
  nav.innerHTML = `
    <a href="index.html" title="Home">1</a>
    <a href="page2.html" title="Gallery">2</a>
  `;
  document.body.appendChild(nav);
}

// ===== SCROLL PROGRESS =====
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  });
}

// ===== KEYBOARD NAV (Only 1 & 2) =====
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;

    if (e.key === '1') window.location.href = 'index.html';
    if (e.key === '2') window.location.href = 'page2.html';

    if (e.key === 'ArrowRight') {
      if (window.location.href.includes('index'))
        window.location.href = 'page2.html';
    }

    if (e.key === 'ArrowLeft') {
      if (window.location.href.includes('page2'))
        window.location.href = 'index.html';
    }
  });
}

// ===== PAGE FADE IN =====
function initPageFadeIn() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
}

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  initGlobalEffects();
  initMagicInput();
  initPageNav();
  initScrollProgress();
  initKeyboardNav();
  initPageFadeIn();
});

// Export minimal
window.ValentineProposal = {
  createHeartRain
};

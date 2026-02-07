/* ===== VALENTINE PROPOSAL - Main JavaScript ===== */

// Console magic words
const MAGIC_WORDS = ['Riya', 'Lakshay', 'Love', 'Forever', 'Magic', 'Valentine'];
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

// ===== CLOUDS =====
function createClouds(count = 5) {
  const container = document.querySelector('.heart-rain') || document.body;
  for (let i = 0; i < count; i++) {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.width = (80 + Math.random() * 120) + 'px';
    cloud.style.height = (40 + Math.random() * 40) + 'px';
    cloud.style.left = Math.random() * 90 + 'vw';
    cloud.style.top = Math.random() * 80 + 'vh';
    cloud.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(cloud);
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
  createClouds();
  createMagicGlow();
}

// ===== MAGIC SPELL INPUT =====
const SPELLS = {
  riya: () => {
    const el = document.querySelector('.spell-target, .giant-name, [data-riya-name]');
    if (el) {
      const existing = el.querySelector('.spell-result');
      if (existing) existing.remove();
      const span = document.createElement('span');
      span.className = 'spell-result';
      span.textContent = ' Lakshay Jain';
      span.style.cssText = 'color: #ff1493; text-shadow: 0 0 20px rgba(255,105,180,0.8); font-weight: bold;';
      el.appendChild(span);
    }
    const zoomEl = document.createElement('div');
    zoomEl.className = 'riya-zoom-flash';
    zoomEl.innerHTML = 'Riya Lakshay Jain';
    zoomEl.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 400; font-family: Cormorant Garamond, serif; font-size: 4rem; font-weight: bold; color: white; text-shadow: 0 0 40px #ff69b4, 0 0 80px #8b5cf6; animation: riyaZoomFlash 2s ease-out forwards; pointer-events: none;';
    document.body.appendChild(zoomEl);
    setTimeout(() => zoomEl.remove(), 5000);
    console.log('riya');
  },
  rockstar: () => {
    const modal = document.createElement('div');
    modal.className = 'secret-spell-message';
    modal.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 300; background: white; padding: 1.5rem; border-radius: 20px; box-shadow: 0 10px 50px rgba(0,0,0,0.3); max-width: 400px; width: 90%;';
    modal.innerHTML = `
      <p style="margin-bottom: 1rem; color: #333;">🎸 Tum Ho - Rockstar</p>
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7uNnlVit5qDvfOje0pqICF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <p style="margin-top: 1rem; font-size: 0.9rem;">Enjoy 10 seconds of magic! ✨</p>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.remove(), 10000);
    console.log('rockstar');
  },
  love: () => {
    const container = document.querySelector('.heart-rain') || document.body;
    const hearts = ['❤️', '💕', '💖', '💗'];
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const h = document.createElement('div');
        h.className = 'heart';
        h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        h.style.left = Math.random() * 100 + 'vw';
        h.style.top = '-20px';
        h.style.animation = 'fall 3s linear forwards';
        h.style.fontSize = (1 + Math.random() * 2) + 'rem';
        container.appendChild(h);
        setTimeout(() => h.remove(), 3000);
      }, i * 50);
    }
    console.log('love');
  },
  princess: () => {
    document.body.style.background = 'linear-gradient(135deg, #6b21a8 0%, #8b5cf6 50%, #a855f7 100%)';
    const rainContainer = document.querySelector('.heart-rain') || document.body;
    for (let i = 0; i < 6; i++) {
      const c = document.createElement('div');
      c.className = 'castle';
      c.textContent = '🏰';
      c.style.cssText = `position: fixed; font-size: ${3 + Math.random() * 3}rem; left: ${10 + Math.random() * 80}%; top: ${5 + Math.random() * 70}%; animation: floatCastle 6s ease-in-out infinite; animation-delay: ${i * 0.5}s; z-index: 5; pointer-events: none;`;
      rainContainer.appendChild(c);
      setTimeout(() => c.remove(), 8000);
    }
    const princess = document.createElement('div');
    princess.className = 'disney-princess';
    princess.innerHTML = '👸<br><span style="font-family: Dancing Script; font-size: 2rem;">Disney Princess</span>';
    princess.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 350; background: linear-gradient(135deg, #ff69b4, #8b5cf6); padding: 2rem 3rem; border-radius: 20px; text-align: center; font-size: 4rem; box-shadow: 0 15px 50px rgba(139,92,246,0.6); animation: princessAppear 0.5s ease-out;';
    document.body.appendChild(princess);
    setTimeout(() => princess.remove(), 5000);
    console.log('princess');
  },
  lakshay: () => {
    const container = document.createElement('div');
    container.className = 'lakshay-extravagant';
    container.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 400; display: flex; align-items: center; justify-content: center; pointer-events: none;';
    const stick = document.createElement('div');
    stick.className = 'stick-figure';
    stick.innerHTML = '🕺<br><span style="font-family: Dancing Script; font-size: 2rem;">Lakshay</span>';
    stick.style.cssText = 'font-size: 8rem; background: linear-gradient(135deg, #ff69b4, #8b5cf6); padding: 3rem 4rem; border-radius: 30px; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 80px rgba(255,105,180,0.5); animation: lakshayEntrance 0.6s ease-out;';
    container.appendChild(stick);
    document.body.appendChild(container);
    setTimeout(() => {
      stick.style.animation = 'lakshayDeath 1s ease-in forwards';
      stick.innerHTML = '💀<br><span style="font-family: Dancing Script; font-size: 2rem;">Lakshay (RIP)</span>';
      const explosion = document.createElement('div');
      explosion.innerHTML = '💥';
      explosion.style.cssText = 'position: absolute; font-size: 6rem; animation: explosionPop 0.8s ease-out;';
      container.appendChild(explosion);
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          const angle = (i / 30) * Math.PI * 2;
          const tx = Math.cos(angle) * 250;
          const ty = Math.sin(angle) * 250;
          const p = document.createElement('div');
          p.textContent = ['💥', '✨', '💫'][i % 3];
          p.style.cssText = `position: absolute; left: 50%; top: 50%; font-size: ${1 + Math.random() * 2}rem; --tx: ${tx}px; --ty: ${ty}px; animation: particleFly 1s ease-out forwards;`;
          container.appendChild(p);
          setTimeout(() => p.remove(), 1000);
        }, i * 30);
      }
    }, 800);
    setTimeout(() => container.remove(), 5000);
    console.log('lakshay');
  },
  forever: () => {
    document.body.classList.add('forever-freeze');
    const quote = document.createElement('div');
    quote.className = 'forever-quote';
    quote.innerHTML = '"You are my today and all of my tomorrows." 💜';
    document.body.appendChild(quote);
    setTimeout(() => {
      document.body.classList.remove('forever-freeze');
      quote.remove();
    }, 5000);
    console.log('forever');
  },
  barbie: () => {
    document.body.classList.add('barbie-mode');
    setTimeout(() => document.body.classList.remove('barbie-mode'), 5000);
    console.log('barbie');
  },
  queen: () => {
    const nameEl = document.querySelector('.giant-name, .page-title, [data-riya-name]');
    if (nameEl) nameEl.classList.add('crown-on-name');
    setTimeout(() => nameEl?.classList.remove('crown-on-name'), 5000);
    console.log('queen');
  },
  chaos: () => {
    document.body.classList.add('chaos-mode');
    setTimeout(() => document.body.classList.remove('chaos-mode'), 5000);
    console.log('chaos');
  },
  valentine: () => {
    const container = document.querySelector('.heart-rain') || document.body;
    const cupid = document.createElement('div');
    cupid.innerHTML = '💘';
    cupid.style.cssText = 'position: fixed; top: 20%; left: 50%; transform: translateX(-50%); font-size: 5rem; z-index: 350; animation: floatCastle 2s ease-in-out infinite;';
    document.body.appendChild(cupid);
    for (let i = 0; i < 80; i++) {
      setTimeout(() => {
        const h = document.createElement('div');
        h.className = 'heart';
        h.textContent = ['❤️', '💕', '💖', '💗', '💘'][Math.floor(Math.random() * 5)];
        h.style.left = Math.random() * 100 + 'vw';
        h.style.top = '-10px';
        h.style.animation = 'fall 2s linear forwards';
        h.style.fontSize = (1.5 + Math.random() * 2) + 'rem';
        container.appendChild(h);
        setTimeout(() => h.remove(), 2500);
      }, i * 40);
    }
    const msg = document.createElement('div');
    msg.innerHTML = 'Happy Valentine\'s Day! 💖';
    msg.style.cssText = 'position: fixed; bottom: 20%; left: 50%; transform: translateX(-50%); font-family: Dancing Script; font-size: 2.5rem; color: white; text-shadow: 0 0 20px #ff69b4; z-index: 360;';
    document.body.appendChild(msg);
    setTimeout(() => { cupid.remove(); msg.remove(); }, 5000);
    console.log('valentine');
  },
  magic: () => {
    const wand = document.createElement('div');
    wand.innerHTML = '✨🪄✨';
    wand.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 5rem; z-index: 350; animation: princessAppear 0.5s ease-out;';
    document.body.appendChild(wand);
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const s = document.createElement('div');
        s.className = 'sparkle';
        s.style.cssText = `position: fixed; left: ${20 + Math.random() * 60}%; top: ${20 + Math.random() * 60}%; width: 10px; height: 10px; background: #fff; border-radius: 50%; box-shadow: 0 0 20px #ff69b4; animation: sparkle 1.5s ease-in-out;`;
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 1500);
      }, i * 60);
    }
    const abra = document.createElement('div');
    abra.textContent = 'Abracadabra!';
    abra.style.cssText = 'position: fixed; bottom: 30%; left: 50%; transform: translateX(-50%); font-family: Dancing Script; font-size: 2.5rem; color: #ff69b4; text-shadow: 0 0 20px #8b5cf6; z-index: 360;';
    document.body.appendChild(abra);
    setTimeout(() => { wand.remove(); abra.remove(); }, 5000);
    console.log('magic');
  },
  castle: () => {
    const rainContainer = document.querySelector('.heart-rain') || document.body;
    for (let i = 0; i < 5; i++) {
      const c = document.createElement('div');
      c.className = 'castle';
      c.textContent = '🏰';
      c.style.cssText = `position: fixed; font-size: ${4 + Math.random() * 4}rem; left: ${5 + Math.random() * 85}%; top: ${10 + Math.random() * 70}%; z-index: 350; animation: floatCastle 4s ease-in-out infinite; animation-delay: ${i * 0.3}s; pointer-events: none;`;
      rainContainer.appendChild(c);
      setTimeout(() => c.remove(), 5000);
    }
    for (let i = 0; i < 8; i++) {
      const cloud = document.createElement('div');
      cloud.className = 'cloud';
      cloud.style.cssText = `position: fixed; width: ${100 + Math.random() * 150}px; height: ${50 + Math.random() * 50}px; background: rgba(255,255,255,0.4); border-radius: 100px; left: ${Math.random() * 80}%; top: ${Math.random() * 80}%; z-index: 345; animation: floatCloud 6s ease-in-out infinite; animation-delay: ${i * 0.2}s; pointer-events: none;`;
      rainContainer.appendChild(cloud);
      setTimeout(() => cloud.remove(), 5000);
    }
    setTimeout(() => {}, 5000);
    console.log('castle');
  },
  riyalakshay: () => {
    alert('You found the secret spell! Riya + Lakshay = Forever 💖');
    console.log('riyalakshay');
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
      if (SPELLS[val]) {
        SPELLS[val]();
      }
      input.value = '';
    }
  });
}

// ===== RUNAWAY NO BUTTON =====
function initRunawayNo() {
  const btnNo = document.querySelector('.btn-no');
  const messages = ['Wrong answer!', 'Try the other one!', 'Nice try 😜', 'That\'s not the right button!', 'The Yes button is right there!', 'Silly you!'];
  let lastMessageTime = 0;

  btnNo.style.position = 'fixed';
  btnNo.style.left = '60%';
  btnNo.style.top = '60%';

  function moveButton() {
    if (!btnNo) return;
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 80;
    btnNo.style.left = (20 + Math.random() * maxX) + 'px';
    btnNo.style.top = (20 + Math.random() * maxY) + 'px';
    
    const now = Date.now();
    if (now - lastMessageTime > 2000) {
      const msg = document.createElement('div');
      msg.className = 'teasing-message';
      msg.textContent = messages[Math.floor(Math.random() * messages.length)];
      document.body.appendChild(msg);
      setTimeout(() => msg.remove(), 1500);
      lastMessageTime = now;
    }
  }

  function checkProximity(e) {
    if (!btnNo) return;
    const touch = e.touches ? e.touches[0] : null;
    const clientX = touch ? touch.clientX : e.clientX;
    const clientY = touch ? touch.clientY : e.clientY;
    if (clientX == null || clientY == null) return;
    const rect = btnNo.getBoundingClientRect();
    const dist = Math.hypot(clientX - (rect.left + rect.width/2), clientY - (rect.top + rect.height/2));
    if (dist < 100) moveButton();
  }

  btnNo.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    moveButton();
    return false;
  });

  document.addEventListener('mousemove', checkProximity);
  document.addEventListener('touchmove', checkProximity, { passive: true });
  document.addEventListener('touchstart', checkProximity, { passive: true });
}

// ===== TYPEWRITER =====
function typewriter(el, text, speed = 50) {
  if (!el || typeof text !== 'string') return Promise.resolve();
  let i = 0;
  el.innerHTML = '';
  el.style.visibility = 'visible';
  return new Promise(resolve => {
    function type() {
      if (i < text.length) {
        const char = text[i];
        const escaped = char === '\n' ? '<br>' : char.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        el.innerHTML += escaped;
        i++;
        setTimeout(type, speed);
      } else resolve();
    }
    type();
  });
}

// ===== CONFETTI =====
function createConfetti() {
  const colors = ['#ff69b4', '#ff1493', '#8b5cf6', '#e91e8c', '#fff'];
  const container = document.createElement('div');
  container.className = 'heart-explosion';
  container.style.pointerEvents = 'none';
  document.body.appendChild(container);

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const p = document.createElement('div');
      p.style.cssText = `position: absolute; width: 10px; height: 10px; background: ${colors[i % colors.length]}; left: ${50 + (Math.random() - 0.5) * 50}vw; top: 50vh; border-radius: ${Math.random() > 0.5 ? '50%' : '0'}; animation: confettiFall 2s ease-out forwards;`;
      p.style.setProperty('--tx', (Math.random() - 0.5) * 400 + 'px');
      p.style.setProperty('--ty', (Math.random() - 0.5) * 400 + 'px');
      container.appendChild(p);
      setTimeout(() => p.remove(), 2000);
    }, i * 30);
  }

  const style = document.createElement('style');
  style.textContent = `@keyframes confettiFall { to { transform: translate(var(--tx, 0), var(--ty, 0)); opacity: 0; } }`;
  document.head.appendChild(style);
  setTimeout(() => {
    container.remove();
    style.remove();
  }, 3000);
}

// ===== HEART FIREWORKS =====
function heartFireworks() {
  const container = document.querySelector('.heart-rain') || document.body;
  const hearts = ['❤️', '💕', '💖'];
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const h = document.createElement('div');
      h.className = 'heart';
      h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      h.style.left = '50vw';
      h.style.top = '50vh';
      h.style.fontSize = (1.5 + Math.random() * 2) + 'rem';
      h.style.animation = 'none';
      const angle = (i / 80) * Math.PI * 2;
      const dist = 200 + Math.random() * 300;
      h.animate([
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
        { transform: `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist}px)) scale(0)`, opacity: 0 }
      ], { duration: 1500, easing: 'ease-out' });
      container.appendChild(h);
      setTimeout(() => h.remove(), 1500);
    }, i * 20);
  }
}

// ===== QUIZ =====
const QUIZ_DATA = [
  { q: "Her fav color?", opts: ["Red ❤️", "Blue", "Pink"], correct: 0, fact: "Red is the color of love!" },
  { q: "What kind of person is she?", opts: ["Mountain person 🏔️", "Beach person", "City person"], correct: 0, fact: "Adventure awaits in the mountains together!" },
  { q: "Fav food?", opts: ["Cheesy Fries 🍟", "Pizza", "Burger"], correct: 0, fact: "Cheesy fries and you = perfect combo!" },
  { q: "Fav place?", opts: ["Social, Hauz Khas", "CP", "Cafe"], correct: 0, fact: "Social has seen many of your moments!" },
  { q: "First date?", opts: ["Ama Cafe ☕", "Starbucks", "Social"], correct: 0, fact: "Ama Cafe - where it all began!" },
  { q: "Relationship lasted due to?", opts: ["100₹ given during chhole bhature 😂", "Destiny", "Luck"], correct: 0, fact: "Sometimes the smallest gestures mean the most!" }
];

// ===== REASONS =====
const REASONS = [
  "Your smile lights up my world",
  "You make me want to be better",
  "Your laugh is my favorite sound",
  "You support me through everything",
  "Secret: I think about you every morning",
  "You're my best friend and my love",
  "Secret: I save your voice notes",
  "You believe in me when I don't",
  "Your eyes tell a thousand stories",
  "Secret: I get butterflies every time"
];

// ===== EXTRA FEATURES =====
function initPageNav() {
  const nav = document.createElement('nav');
  nav.className = 'page-nav';
  nav.innerHTML = `
    <a href="index.html" title="Home">1</a>
    <a href="page2.html" title="Gallery">2</a>
    <a href="page3.html" title="Quiz">3</a>
    <a href="page4.html" title="Letter">4</a>
    <a href="page5.html" title="Proposal">5</a>
  `;
  document.body.appendChild(nav);
}

function initScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  });
}

function initCountdown() {
  const el = document.getElementById('valentine-countdown');
  if (!el) return;
  const startDate = new Date('2024-07-01T00:00:00');
  function update() {
    const now = new Date();
    const diffMs = now - startDate;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    el.innerHTML = days + ' days, ' + hours + ' hours, ' + mins + ' minutes together 💕';
  }
  update();
  setInterval(update, 60000); // update every minute
}

function initLoveQuotes() {
  const el = document.getElementById('love-quote');
  if (!el) return;
  const quotes = [
    '"You are my today and all of my tomorrows."',
    '"I love you not only for what you are, but for what I am when I am with you."',
    '"In you, I\'ve found the love of my life."',
    '"Every moment with you is magical."',
    '"You make my heart skip a beat."'
  ];
  el.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const href = window.location.href;
    let i = 1;
    if (href.includes('page2')) i = 2;
    else if (href.includes('page3')) i = 3;
    else if (href.includes('page4')) i = 4;
    else if (href.includes('page5')) i = 5;
    if (e.key >= '1' && e.key <= '5') {
      const target = e.key === '1' ? 'index.html' : 'page' + e.key + '.html';
      if ((e.key === '1' ? 1 : parseInt(e.key)) !== i) window.location.href = target;
      return;
    }
    if (e.key === 'ArrowRight' && i < 5) {
      window.location.href = i === 1 ? 'page2.html' : 'page' + (i + 1) + '.html';
    }
    if (e.key === 'ArrowLeft' && i > 1) {
      window.location.href = i === 2 ? 'index.html' : 'page' + (i - 1) + '.html';
    }
  });
}

function initAnniversaryCounter() {
  const el = document.getElementById('anniversary-counter');
  if (!el) return;
  const startDate = new Date('2024-07-01T00:00:00');
  function update() {
    const diffMs = new Date() - startDate;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    el.textContent = days + ' days together 💕';
  }
  update();
  setInterval(update, 60000);
}

function initDoubleTapHeart() {
  let lastTap = 0;
  document.addEventListener('click', (e) => {
    const now = Date.now();
    if (now - lastTap < 400 && now - lastTap > 50) {
      lastTap = 0;
      const container = document.querySelector('.heart-rain') || document.body;
      const h = document.createElement('div');
      h.className = 'heart';
      h.textContent = '❤️';
      h.style.left = e.clientX + 'px';
      h.style.top = e.clientY + 'px';
      h.style.position = 'fixed';
      h.style.animation = 'none';
      h.style.fontSize = '2rem';
      h.style.pointerEvents = 'none';
      h.animate([{ transform: 'scale(1)', opacity: 1 }, { transform: 'scale(2)', opacity: 0 }], { duration: 800 });
      container.appendChild(h);
      setTimeout(() => h.remove(), 800);
      return;
    }
    lastTap = now;
  });
}

function initFloatingILoveYou() {
  setInterval(() => {
    if (Math.random() > 0.92) {
      const bubble = document.createElement('div');
      bubble.textContent = 'I love you 💕';
      bubble.className = 'floating-ilu';
      bubble.style.cssText = 'position: fixed; left: ' + (10 + Math.random() * 80) + '%; bottom: -50px; font-family: Dancing Script; font-size: 1.5rem; color: white; text-shadow: 0 0 10px #ff69b4; z-index: 50; animation: floatIlu 4s ease-out forwards; pointer-events: none;';
      document.body.appendChild(bubble);
      setTimeout(() => bubble.remove(), 4000);
    }
  }, 3000);
}

function initCopyLink() {
  const btn = document.getElementById('copy-link-btn');
  if (!btn) return;
  btn.onclick = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      btn.textContent = 'Copied! ✓';
      setTimeout(() => btn.textContent = 'Share Link', 2000);
    });
  };
}

function initPhotoLightbox() {
  document.querySelectorAll('.polaroid img').forEach(img => {
    img.style.cursor = 'pointer';
    img.onclick = (e) => {
      e.stopPropagation();
      const lb = document.createElement('div');
      lb.className = 'lightbox';
      lb.innerHTML = '<img src="' + img.src + '" alt="Photo">';
      lb.onclick = () => lb.remove();
      document.body.appendChild(lb);
    };
  });
}

function initPageFadeIn() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => { document.body.style.opacity = '1'; });
}

function initCursorHearts() {
  let count = 0;
  document.addEventListener('mousemove', (e) => {
    if (count++ % 40 !== 0) return;
    const h = document.createElement('div');
    h.textContent = '♥';
    h.style.cssText = 'position: fixed; left: ' + (e.clientX + 12) + 'px; top: ' + (e.clientY + 5) + 'px; font-size: 0.7rem; color: rgba(255,105,180,0.4); pointer-events: none; z-index: 9999;';
    document.body.appendChild(h);
    h.animate([{ opacity: 0.5 }, { opacity: 0 }], { duration: 500 });
    setTimeout(() => h.remove(), 500);
  });
}

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  initGlobalEffects();
  initMagicInput();
  if (document.querySelector('.btn-no')) initRunawayNo();
  initPageNav();
  initScrollProgress();
  initCountdown();
  initLoveQuotes();
  initKeyboardNav();
  initAnniversaryCounter();
  initDoubleTapHeart();
  initFloatingILoveYou();
  initCopyLink();
  if (document.querySelector('.polaroid img')) initPhotoLightbox();
  initPageFadeIn();
  initCursorHearts();
});

// Export for use in pages
window.ValentineProposal = {
  createHeartRain,
  createConfetti,
  heartFireworks,
  typewriter,
  initRunawayNo,
  initMagicInput,
  QUIZ_DATA,
  REASONS,
  SPELLS
};

// Эффект на заднем фоне
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particlesArray = [];

function init() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
particlesArray = [];

const numberOfParticles = 100;

  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.shadowColor = 'white';
  ctx.shadowBlur = 5;

particlesArray.forEach(p => {
  p.x += p.speedX;
  p.y += p.speedY;


        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
      init();
    });

    init();
    animate();



    // Скролл
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



// Режим 
const themeToggle = document.getElementById('theme-toggle');
let isLightMode = false;

themeToggle.addEventListener('click', () => {
  isLightMode = !isLightMode;
  document.body.classList.toggle('light-mode', isLightMode);
  themeToggle.textContent = isLightMode ? '🌙' : '☀️'; 
});



// Бургер лендинг
const burgerBtn = document.querySelector('.burger-btn');
const headerMenu = document.querySelector('.header_menu');


burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  headerMenu.classList.toggle('active');
});


document.querySelectorAll('.header_menu a').forEach(link => {
  link.addEventListener('click', () => {
    burgerBtn.classList.remove('active');
    headerMenu.classList.remove('active');
  });
});



// Прокрутка вверх
const scrollBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { 
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});



// Обработка формы
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const phone = form.elements.phone.value;
  const message = form.elements.message.value;

  alert(`Спасибо, ${name}! Мы получили ваше сообщение.`);
  
  form.reset();
});

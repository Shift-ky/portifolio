const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const themeButton = document.querySelector('.theme-toggle');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation?.classList.toggle('open') ?? false;
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

themeButton?.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

const sections = [...document.querySelectorAll('main section[id], footer[id]')];
const navLinks = [...document.querySelectorAll('.nav-link')];

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
    });
  }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, .2, .5] });
  sections.forEach((section) => observer.observe(section));
}


const resumeButton = document.querySelector('.button-outline[href="#experiencia"]');
if (resumeButton) {
  resumeButton.href = 'https://github.com/Shift-ky/Curriculum/blob/main/curriculum/ROBSON1.1.pdf';
  resumeButton.target = '_blank';
  resumeButton.rel = 'noopener noreferrer';
  resumeButton.innerHTML = '<span aria-hidden="true">▣</span> Currículo';
}

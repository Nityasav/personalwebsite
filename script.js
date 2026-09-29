// Highlight the nav link for the section currently in view.
const links = [...document.querySelectorAll('nav a')].filter(a => a.getAttribute('href').startsWith('#'));
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));

const observer = new IntersectionObserver(entries => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }
}, { rootMargin: '-20% 0px -70% 0px' });

sections.forEach(s => observer.observe(s));

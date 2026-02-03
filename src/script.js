const aside = document.getElementById('aside');
const svgs = document.querySelectorAll('svg');
svgs.forEach(s => {
  s.addEventListener('click', (e) => {e.stopPropagation();
    aside.classList.toggle('active');
  });
});

function close() {
  // Tab to edit
  aside.classList.toggle('active')
}
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);
const reveal = document.querySelectorAll('.reveal');
reveal.forEach(e => observer.observe(e));
const img = document.querySelectorAll('img');
img.forEach(i => observer.observe(i));

document.getElementById('main').addEventListener('click', () => aside.classList.remove('active'))
document.getElementById('header').addEventListener('click', () => aside.classList.remove('active'))
document.getElementById('footer').addEventListener('click', () => aside.classList.remove('active'))

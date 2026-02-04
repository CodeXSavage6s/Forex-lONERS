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
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    // Check if the href is empty or just a "#"
    const href = link.getAttribute('href');
    
    if (!href || href === '#' || href === '') {
      event.preventDefault(); // Stops the link from following the URL
      event.stopPropagation(); // Stops the click from bubbling up
      alert('Unavailable');
    }
  });
});

const aside = document.getElementById('aside');
const svgs = document.querySelectorAll('svg');

svgs.forEach(s => {
  s.addEventListener('click', () => {
    aside.classList.toggle('active');
  });
});


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
reveal.forEach(e => observer.observe(e))
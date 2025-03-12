// Scroll animation observer
const createScrollObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all elements with data-scroll attribute
  document.querySelectorAll('[data-scroll]').forEach((element) => {
    observer.observe(element);
  });
};

export default createScrollObserver; 
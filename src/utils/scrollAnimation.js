export const initScrollAnimation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.1, // Trigger when at least 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Slightly delay animation until element is more in view
    }
  );

  // Observe all elements with the scroll-animate class
  document.querySelectorAll('.scroll-animate').forEach((element) => {
    observer.observe(element);
  });
}; 
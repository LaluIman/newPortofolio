// nav
gsap.registerPlugin();

gsap.from(".logo", { opacity: 0, duration: 1, delay: 2, y: -50, ease: "power2.out" });
gsap.from(".navbar a", { opacity: 0, duration: 1, delay: 2, y: -20, ease: "power2.out", stagger: 0.2 });

// Adding a GSAP event listener to toggle the 'active' class on hover
document.querySelectorAll('.navbar a').forEach((link) => {
    link.addEventListener('mouseenter', () => {
        link.querySelector('::before').classList.add('active');
    });

    link.addEventListener('mouseleave', () => {
        link.querySelector('::before').classList.remove('active');
    });
});
// nav end

// home
gsap.from('.home-text h1', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power4.out',
    delay: 1,
    scrollTrigger: {
      trigger: '.home-text',
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1,
      markers: true
    }
  });

  gsap.from('.home-text p', {
    opacity: 0,
    y: 50,
    duration: 2, // Make the duration slower for the <p> element
    ease: 'power4.out',
    delay: 2, // Add a delay for the <p> element
    scrollTrigger: {
      trigger: '.home-text',
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1,
      markers: true
    }
  });

// home end


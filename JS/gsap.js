// nav
gsap.registerPlugin();

gsap.from(".logo", { opacity: 0, duration: 1, delay: 3.5, y: -50, ease: "power2.out" });
gsap.from(".navbar a", { opacity: 0, duration: 1, delay: 3.5, y: -20, ease: "power2.out", stagger: 0.2 });


document.querySelectorAll('.navbar a').forEach((link) => {
    link.addEventListener('mouseenter', () => {
        link.querySelector('::before').classList.add('active');
    });

    link.addEventListener('mouseleave', () => {
        link.querySelector('::before').classList.remove('active');
    });
});
// nav end

// home section for lalu iman text
gsap.from('.home-text h1', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power4.out',
    delay: 2,
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
    duration: 1.5, 
    ease: 'power4.out',
    delay: 2.5, 
    scrollTrigger: {
      trigger: '.home-text',
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1,
      markers: true
    }
  });

// home end


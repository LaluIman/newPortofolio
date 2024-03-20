// nav
gsap.registerPlugin(); // Register GSAP plugin

// Animation for logo (modify clip-path inset value if needed)
gsap.from(".logo", {
  clipPath: "inset(100% 0px 0px 0px)",  // Clip logo initially
  height: 0,
  duration: 1,
  delay: 2.5,
  ease: "power2.out"
});

// Animation for navbar links (modify clip-path inset value if needed)
gsap.from(".navbar a", {
  clipPath: "inset(100% 0px 0px 0px)",  // Clip links initially
  height: 0,
  duration: 1,
  delay: 2.6,
  ease: "power2.out",
  stagger: 0.2  // Maintain stagger effect
});

// nav end

// home section for lalu iman text
gsap.from('.home-text h1', {
  y: '100%', 
  clipPath: "inset(0px 0px 100% 0px)",
  height: 0, 
  duration: 1.2,
  ease: 'power3.inOut', 
  delay: 1.5,
  scrollTrigger: {
    trigger: '.home-text',
    start: 'top 80%',
    end: 'top 30%',
    scrub: true,
    markers: false,
    stagger: 0.2
  }
});


gsap.from('.home-text p', {  
  y: -80, 
  opacity: 0.3, 
  duration: 1,
  ease: 'power3.out', 
  delay: 2, 
  scrollTrigger: {
    trigger: '.home-text',
    start: 'top 80%',
    end: 'top 40%',
    scrub: 2, 
    markers: true
  }
});




// home end


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
  y: '100%', // Start element completely offscreen below
  clipPath: "inset(0px 0px 100% 0px)", // Clip the entire element initially
  height: 0, // Set initial height to 0
  duration: 1.2,
  ease: 'power3.inOut', // Smooth ease in and out
  delay: 1.5,
  scrollTrigger: {
    trigger: '.home-text',
    start: 'top 80%',
    end: 'top 30%',
    scrub: true,
    markers: false
  }
});


gsap.from('.home-text p', {  // Animate the paragraph element
  y: -80, // Slide in from bottom
  opacity: 0.3, // Start semi-transparent
  duration: 1,
  // Remove bounce ease
  ease: 'power3.out', // Smooth ease out
  delay: 2, // Delay slightly after h1
  scrollTrigger: {
    trigger: '.home-text',
    start: 'top 80%',
    end: 'top 30%',
    scrub: 2, // Slower animation progression during scroll
    markers: true
  }
});




// home end


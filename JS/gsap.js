// nav
gsap.registerPlugin(); 


gsap.from(".logo", {
  clipPath: "inset(100% 0px 0px 0px)", 
  height: 0,
  duration: 1,
  delay: 2.5,
  ease: "power2.out"
});


gsap.from(".navbar a", {
  clipPath: "inset(100% 0px 0px 0px)",  
  height: 0,
  duration: 1,
  delay: 2.5,
  ease: "power2.out",
  stagger: 0.2  
});

// nav end

// home section for lalu iman text
gsap.from('.home-text h1', {
  y: '100%', 
  clipPath: "inset(0px 0px 100% 0px)",
  height: 0, 
  duration: 1.5, 
  ease: 'power4.inOut', 
  delay: 1.2, 
  scrollTrigger: {
    trigger: '.home-text',
    start: 'top 80%',
    end: 'top 0%',
    scrub: true,
    markers: false,
    stagger: 0.2
  }
});


gsap.from('.home-text p', {  
  y: -80, 
  opacity: 0.3, 
  duration: 1.2, 
  ease: 'expo.out', 
  delay: 2.2, 
  scrollTrigger: {
    trigger: '.home-text',
    start: 'top 100%',
    end: 'top 40%',
    scrub: 2, 
    markers: true
  }
});


gsap.from('.home-text p span.line', { // animate the line under the p element
  scaleX: 0, 
  transformOrigin: 'left', 
  duration: 1, 
  ease: 'power2.out', 
  delay: 2.5, 
  scrollTrigger: {
    trigger: '.home-text',
    start: 'top 80%',
    end: 'top 0%',
    scrub: true,
    markers: false
  }
});

// home end


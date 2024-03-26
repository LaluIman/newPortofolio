
// mouse
const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; 
const pos = { x: 0, y: 0 }; 
const speed = 0.1; 

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);


function getAngle(diffX, diffY) {
  return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(
    Math.pow(diffX, 2) + Math.pow(diffY, 2)
  );
  const maxSqueeze = 0.15;
  const accelerator = 1500;
  return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);
  
  pos.x += diffX * speed;
  pos.y += diffY * speed;
  
  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);
  
  const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
  const rotate = 'rotate(' + angle +'deg)';
  const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);



const cursorModifiers = document.querySelectorAll('[cursor-class]');

cursorModifiers.forEach(curosrModifier => {
  curosrModifier.addEventListener('mouseenter', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.add(className);
  });
  
  curosrModifier.addEventListener('mouseleave', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.remove(className);
  });
});

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header a');

window.onscroll= () => {
   sections.forEach(sec=>{
         let top = window.scrollY;
         let offset = sec.offsetTop - 150 ;
         let height = sec.offsetHeight;
         let id = sec.getAttribute('id');

         if(top >= offset && top < offset + height){
         navLinks.forEach(link =>{
        link.classList.remove('active');
        document.querySelector('header a[href*=' + id +']').classList.add('active');
         });
     };
     });
}



ScrollReveal({ 
    reset: true,
    distance:'150px',
    duration:1000,
    delay:200
 });

 ScrollReveal().reveal('.home, .about .about-text p, .project-img a, .contact', { origin: 'bottom'});
 ScrollReveal().reveal('.about-img, .quotes h1, .skill h1', { origin: 'left'});
 ScrollReveal().reveal('.about-text, .heading', { origin: 'top'});
 ScrollReveal().reveal('.skill ul li, .project-img h1, .sociala li', { origin: 'right'});



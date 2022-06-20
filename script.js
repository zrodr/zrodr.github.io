const carousel = document.getElementById('project-carousel');
const scrollArrow = document.querySelector('.scroll-arrow');

const main = () => {
  if (carousel && scrollArrow) {
    // detect if the scrollbar is currently in the left-most or right-most position
    carousel.addEventListener('scroll', (event) => {
      if (carousel.scrollWidth - carousel.clientWidth === Math.abs(carousel.scrollLeft)) {
        setArrowDirection('end');
      }
      else if (carousel.scrollLeft === 0) {
        setArrowDirection('start');
      }
    });
  
    // snap to the left/right card depending on the current arrow direction
    scrollArrow.addEventListener('click', (event) => {
      const currentScrollVal = carousel.scrollLeft;
      let snapValue = (carousel.scrollWidth / carousel.childElementCount) + 15;
  
      // handles movement from end -> start
      if (scrollArrow.classList.contains('end')) 
        snapValue *= -1;
  
      carousel.scrollTo(currentScrollVal + snapValue, 0); 
    });
  }
}

main();


/* helper functions */

function setArrowDirection(position) {
  if (position === 'start') {
    scrollArrow.classList.remove('end');
    scrollArrow.classList.add('start');
  }
  else {
    scrollArrow.classList.remove('start');
    scrollArrow.classList.add('end');
  }
}
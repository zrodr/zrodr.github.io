const scrollArrow = document.querySelector(".scroll-arrow");
const carousel = document.getElementById("project-carousel");
const carouselElements = carousel.querySelectorAll(".project-card");

const horizontalScrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  },
  { threshold: 0.5 }
);

const main = () => {
  if (carousel && scrollArrow) {
    // detect if the scrollbar is currently in the left-most or right-most position
    carousel.addEventListener("scroll", (event) => {
      if (
        carousel.scrollWidth - carousel.clientWidth ===
        Math.abs(carousel.scrollLeft)
      ) {
        setArrowDirection("end");
      } else if (carousel.scrollLeft === 0) {
        setArrowDirection("start");
      }
    });

    carouselElements.forEach((element) => {
      horizontalScrollObserver.observe(element);
    });

    // snap to the left/right card depending on the current arrow direction
    scrollArrow.addEventListener("click", (event) => {
      const currentScrollVal = carousel.scrollLeft;
      let snapValue = carousel.scrollWidth / carousel.childElementCount;
      snapValue += carousel.scrollWidth % carousel.childElementCount;

      // handles movement from end -> start
      if (scrollArrow.classList.contains("end")) snapValue *= -1;

      carousel.scrollTo(currentScrollVal + snapValue, 0);
    });
  }
};

main();

/* helper functions */

function setArrowDirection(position) {
  if (position === "start") {
    scrollArrow.classList.remove("end");
    scrollArrow.classList.add("start");
  } else {
    scrollArrow.classList.remove("start");
    scrollArrow.classList.add("end");
  }
}

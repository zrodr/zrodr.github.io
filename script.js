const fadeInElements = document.querySelectorAll(".hidden");
const projectCarouselElements = document
  .getElementById("project-carousel")
  .querySelectorAll(".project-card");

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

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    } else {
      entry.target.classList.remove("fade-in");
    }
  });
});

const main = () => {
  if (projectCarouselElements && fadeInElements) {
    projectCarouselElements.forEach((element) => {
      horizontalScrollObserver.observe(element);
    });

    fadeInElements.forEach((element) => {
      fadeInObserver.observe(element);
    });
  }
};

main();

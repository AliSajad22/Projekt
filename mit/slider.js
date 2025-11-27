function initSlider() {
  const track = document.querySelector(".slider-track");
  const slides = [...document.querySelectorAll(".slide")];

  if (!track || slides.length === 0) return;

  let index = 0;

  // ---------- Hilfsfunktion: Slide Breite ----------
  const getSlideWidth = () => slides[0].offsetWidth;

  // ---------- Update Funktion ----------
  const update = () => {
    track.style.transform = `translateX(${-index * getSlideWidth()}px)`;
  };

  // ---------- Buttons ----------
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (nextBtn) {
    nextBtn.onclick = () => {
      const visibleCount = Math.floor(track.offsetWidth / getSlideWidth());
      if (index < slides.length - visibleCount) {
        index++;
        update();
      }
    };
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      if (index > 0) {
        index--;
        update();
      }
    };
  }

  // ---------- Resize ----------
  window.addEventListener("resize", () => {
    const visibleCount = Math.floor(track.offsetWidth / getSlideWidth());
    if (index > slides.length - visibleCount) {
      index = slides.length - visibleCount;
      if (index < 0) index = 0; // Safety
    }
    update();
  });

  // ---------- Initial ----------
  update();
}


  const slider = document.querySelector(".slider-track");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pagex - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleav", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", () => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pagex - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });

export default initSlider;

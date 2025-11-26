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

export default initSlider;

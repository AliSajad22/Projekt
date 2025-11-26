function initSlider() {
  const track = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide");

  let index = 0;
  function update() {
    track.style.transform = `translateX(${-50 * index}%)`;
  }

  document.querySelector(".next").addEventListener("click", () => {
    if (index >= slides.length - 2) return;

    index++;
    update();
  });

  document.querySelector(".prev").addEventListener("click", () => {
    if (index <= 0) return;

    index--;
    update();
  });
}

export default initSlider;

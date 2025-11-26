let prevScrollPos;
let header;

const setSticky = () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos || currentScrollPos <= 0) {
    header.style.transform = "translateY(0%)";
  } else {
    header.style.transform = "translateY(-100%)";
  }

  prevScrollPos = currentScrollPos;
};

const initHeader = () => {
  header = document.querySelector(".header");

  if (!header) return;

  prevScrollPos = window.pageYOffset;
  window.addEventListener("scroll", setSticky, { passive: true });
};

export default initHeader;

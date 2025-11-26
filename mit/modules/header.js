let prevScrollPos;
let header;

const setSticky = () => {
  // Nur für kleine Bildschirme (Handy)
  if (window.innerWidth >= 768) return; // Tablet-Breakpoint anpassen

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

  // Optional: Header beim Resize zurücksetzen
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      header.style.transform = "translateY(0)";
    }
  });
};

export default initHeader;

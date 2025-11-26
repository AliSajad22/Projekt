// const btn = document.querySelector(".show-Btn");
// const hiddenItems = document.querySelectorAll(".hidden");
// const svgIcon = btn.querySelector("use");

// let expanded = false;

// btn.addEventListener("click", () => {
//   hiddenItems.forEach((item) => {
//     item.style.display = expanded ? "none" : "list-item";
//   });

//   svgIcon.setAttributeNS(
//     "http://www.w3.org/1999/xlink",
//     "xlink:href",
//     expanded ? "#arrow-down" : "#arrow-up"
//   );

//   expanded = !expanded;
// });

// const btn = document.querySelector(".show__Btn");
// const hiddenItems = document.querySelectorAll(".hidden");

// let expanded = false;

// btn.addEventListener("click", function () {
//   if (!expanded) {
//     hiddenItems.forEach((item) => {
//       item.style.display = "list-item";
//     });
//     expanded = true;
//   } else {
//     hiddenItems.forEach((item) => {
//       item.style.display = "none";
//     });
//     expanded = false;
//   }
// });

// const showContent = document.querySelector(".js_show-toggle");

// let expanded = false;

// showContent.addEventListener("click", () => {
//   if (!showContent) return;
//   const rotatedIcon = document.querySelector(".arrow-down");
//   const toggleItems = document.querySelectorAll(".list");

//   toggleItems.forEach((item) => {
//     item.style.maxHeight = expanded
//       ? "calc(var(--line-height-s) * 5)"
//       : item.scrollHeight + "px";
//   });
//   rotatedIcon.classList.toggle("rotated");
//   expanded = !expanded;
// });

// function initshowMore() {
//   const btn = document.querySelector(".js_show-toggle");
//   const rotatedIcon = btn.querySelector(".chevron-down");

//   let expanded = false;

//   btn.addEventListener("click", () => {
//     rotatedIcon.classList.toggle("rotated");

//     expanded = !expanded;
//   });
// }
// export default initshowMore;

// const showContent = document.querySelectorAll(".js_show-toggle");
// let expanded = false;

// showContent.addEventListener("click", () => {
//   if (!showMoreBtn) return;
//   const rotatedIcon = document.querySelector(".arrow-down");
//   const toggleItems = document.querySelectorAll(".list");

//   toggleItems.forEach((item) => {
//     item.style.maxHeight = expanded
//       ? "calc(var(--line-height-s) * 5)"
//       : item.scrollHeight + "px";
//   });

//   rotatedIcon.classList.toggle("rotated");
//   expanded = !expanded;
// });

// const showContent = document.querySelector(".js_show-toggle");

// showContent.addEventListener("click", () => {
//   const rotatedIcon = document.querySelector(".arrow-down");
//   const toggleItems = document.querySelectorAll(".list");

//   toggleItems.forEach((item) => {
//     item.classList.toggle("directory--expanded");
//   });
//   rotatedIcon.classList.toggle("rotated");
// });

// const button = document.querySelectorAll(".js_show-toggle");
// // if (!button.length) return;

// button.forEach((button) => {
//   button.addEventListener("click", () => {
//     const parent = button.closest(".directory__inner");
//     if (!parent) return;

//     const toggleItems = document.querySelectorAll(".list");
//     toggleItems.forEach((item) => {
//       item.classList.toggle("directory--expanded");
//     });

//     // const rotatedIcon = document.querySelector(".arrow-down");
//     // if (rotatedIcon) {
//     //   rotatedIcon.classList.toggle("rotated");
//     // }
//   });
// });

// const button = document.querySelectorAll(".js_show-toggle");
// // if (!button.length) return;
// button.forEach((button) => {
//   button.addEventListener("click", () => {
//     const parent = button.closest(".directory");
//     if (!parent) return;

//     const toggleItems = document.querySelectorAll(".list");
//     toggleItems.forEach((item) => {
//       item.classList.toggle("directory--expanded");
//     });
//   });
// });

// const button = document.querySelectorAll(".js_show-toggle");
// // if (!button.length) return;

// button.forEach((button) => {
//   button.addEventListener("click", () => {
//     const parent = button.closest(".directory__inner");
//     if (!parent) return;

//     const toggleItems = document.querySelectorAll(".arrow-down");
//     toggleItems.forEach((item) => {
//       item.classList.toggle("directory--expanded");
//     });

//     const toggleItem = document.querySelectorAll(".list");
//     toggleItem.forEach((item) => {
//       item.classList.toggle("directory--expanded");
//     });
//   });
// });

const directories = document.querySelectorAll(".directory");
directories.forEach((directory) => {
  if (!directory) return;

  const button = directory.querySelector(".js_show-toggle");
  if (!button) return;
  button.addEventListener("click", () => {
    directory.classList.toggle("directory--expanded");
  });
});




function initSlider() {
  const track = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  let index = 0;
  const update = () => (track.style.transform = `translateX(${-50 * index}%)`);

  next.addEventListener(
    "click",
    () => index < slides.length - 2 && (++index, update())
  );
  prev.addEventListener("click", () => index > 0 && (--index, update()));

  let startX = 0;
  track.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX));
  track.addEventListener("touchend", (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    diff > 40 ? next.click() : diff < -40 && prev.click();
  });
}
export default initSlider;

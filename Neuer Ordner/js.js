const button = document.querySelectorAll(".js_show-toggle");
// if (!button.length) return;

button.forEach((button) => {
  button.addEventListener("click", () => {
    const parent = button.closest(".directory__inner");
    if (!parent) return;

    const toggleItems = document.querySelectorAll(".list");
    toggleItems.forEach((item) => {
      item.classList.toggle("directory--expanded");
    });

    const rotatedIcon = document.querySelector(".arrow-down");
    if (rotatedIcon) {
      rotatedIcon.classList.toggle("rotated");
    }
  });
});



// const btn = document.getElementById("show__Btn");
// const hiddenItems = document.querySelectorAll(".list__item.hidden");

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

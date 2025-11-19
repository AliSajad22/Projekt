function initshowMore() {
  const showMoreBtn = document.querySelector(".js_show-toggle");
  const rotatedIcon = document.querySelector(".arrow-down");
  const toggleItems = document.querySelectorAll(".list");

  let expanded = false;

  showMoreBtn.addEventListener("click", () => {
    toggleItems.forEach((item) => {
      item.style.toggle = "expanded" ? "hidden" : "visible";
      item.style.maxHeight = expanded
        ? "calc(var(--line-height-s) * 5)"
        : item.scrollHeight + "px";
      return;
    });

    rotatedIcon.classList.toggle("rotated");
    expanded = !expanded;
  });
}
export default initshowMore;



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

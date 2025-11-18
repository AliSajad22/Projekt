const btn = document.querySelector(".show-Btn");
const hiddenItems = document.querySelectorAll(".hidden");
const svgIcon = btn.querySelector("use");

let expanded = false;

btn.addEventListener("click", () => {
  hiddenItems.forEach((item) => {
    item.style.display = expanded ? "none" : "list-item";
  });

  svgIcon.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    expanded ? "#arrow-down" : "#arrow-up"
  );

  expanded = !expanded;
});

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

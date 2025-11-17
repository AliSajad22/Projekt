const btn = document.getElementById("show__Btn");
const hiddenItems = document.querySelectorAll(".list__item.hidden");

btn.addEventListener("click", function () {
  hiddenItems.forEach((item) => {
    item.style.display = "list-item";
  });
  btn.style.display = "none";
});

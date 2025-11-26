function initShowContent() {
  const directories = document.querySelectorAll(".directory");
  directories.forEach((directory) => {
    if (!directory) return;

    const button = directory.querySelector(".js_show-toggle");
    if (!button) return;
    button.addEventListener("click", () => {
      directory.classList.toggle("directory--expanded");
    });
  });
}
export default initShowContent;

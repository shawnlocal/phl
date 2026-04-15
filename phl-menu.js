(function () {
  function initTopMenu() {
    const toggle = document.querySelector(".phl-menu-toggle");
    const menu = document.querySelector(".phl-menu-left");

    if (!toggle || !menu) return;

    if (toggle.dataset.bound === "1") return;
    toggle.dataset.bound = "1";

    toggle.addEventListener("click", function () {
      menu.classList.toggle("active");
      toggle.classList.toggle("active");
    });
  }

  document.addEventListener("DOMContentLoaded", initTopMenu);

  const observer = new MutationObserver(initTopMenu);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  initTopMenu();
})();
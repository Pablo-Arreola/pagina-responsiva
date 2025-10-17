document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    // alternar visibilidad del menú en móvil
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
    }
  });
});

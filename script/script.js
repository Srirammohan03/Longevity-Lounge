const menuToggle = document.querySelector(".mobile-menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navCta = document.querySelector(".nav-cta");
const mobileOverlay = document.querySelector(".mobile-overlay");
const navItems = document.querySelectorAll(".nav-item");

function toggleMenu() {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
  navCta.classList.toggle("active");
  mobileOverlay.classList.toggle("active");
  document.body.style.overflow = menuToggle.classList.contains("active")
    ? "hidden"
    : "";
}

menuToggle.addEventListener("click", toggleMenu);
mobileOverlay.addEventListener("click", toggleMenu);

// Close menu when clicking nav items
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
});

// Close menu on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuToggle.classList.contains("active")) {
    toggleMenu();
  }
});

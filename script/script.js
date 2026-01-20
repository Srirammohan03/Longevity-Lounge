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

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((el) => el.classList.remove("active"));

    item.classList.add("active");

    if (window.innerWidth <= 768 && menuToggle.classList.contains("active")) {
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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const reset = () => {};

// Form submission handling
const contactForm = document.querySelector(".appointment-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you for contacting us! We will get back to you shortly.");

    contactForm.reset();
  });
}

const homeForm = document.querySelector(".hj-form");

if (homeForm) {
  homeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for starting your health journey with us!");
    homeForm.reset();
  });
}

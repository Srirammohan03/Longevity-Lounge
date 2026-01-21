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

// Form submission handling of call back
const form = document.getElementById("appointment-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData(form);

    // Convert FormData → Plain Object (payload)
    const payload = Object.fromEntries(formData.entries());

    // Optional: normalize or transform values
    payload.createdAt = new Date().toISOString();

    console.log("Appointment Payload:", payload);

    /*
      Example payload:
      {
        patientName: "John Doe",
        patientContact: "9876543210",
        email: "john@email.com",
        specialty: "Oncology",
        city: "Surat",
        doctor: "Dr. Patel",
        time: "10:30",
        date: "2026-01-20",
        query: "Need consultation",
        createdAt: "2026-01-20T08:20:10.123Z"
      }
    */

    // Reset form after submission
    form.reset();
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

const video = document.getElementById("heroVideo");

video.addEventListener("click", () => {
  video.muted = !video.muted;

  if (!video.muted) {
    video.volume = 1;
  }
});

document
  .querySelectorAll('input[type="date"], input[type="time"]')
  .forEach((input) => {
    input.addEventListener("click", () => {
      if (input.showPicker) {
        input.showPicker();
      }
    });
  });

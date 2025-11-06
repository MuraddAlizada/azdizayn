// Mobile Navigation
const burgerMenu = document.getElementById("burgerMenu");
const mobileNav = document.getElementById("mobileNav");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

if (burgerMenu && mobileNav) {
  burgerMenu.addEventListener("click", () => {
    mobileNav.classList.add("active");
    if (overlay) overlay.classList.add("active");
  });
}

if (closeBtn && mobileNav) {
  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
  });
}

if (overlay && mobileNav) {
  overlay.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
  });
}

// Header Scroll Effect with Throttling
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".internal-header");
  if (!header) return;

  let ticking = false;

  function updateHeader() {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
});


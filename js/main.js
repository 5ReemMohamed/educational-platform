document.addEventListener("DOMContentLoaded", function () {
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const navbar = document.getElementById("navbar"); // Make sure navbar exists too

if (scrollToTopBtn) {
  window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
 const navbarCollapse = document.getElementById("navbarNav");

    if (navbarCollapse) {
        const navLinks = navbarCollapse.querySelectorAll(".nav-link");

        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                if (window.getComputedStyle(navbarCollapse).display !== "none") {
                    new bootstrap.Collapse(navbarCollapse, { toggle: false }).hide();
                }
            });
        });
}
});
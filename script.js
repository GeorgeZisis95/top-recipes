// Fade in / Fade out effect when changing pages

function showPage() {
  requestAnimationFrame(() => {
    document.body.classList.add("visible");
  });
}

/* normal load */
window.addEventListener("DOMContentLoaded", showPage);

/* back / forward navigation */
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    document.body.classList.remove("visible"); // reset state
    showPage();
  }
});

/* fade out before navigation */
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (!href.startsWith("#")) {
      e.preventDefault();
      document.body.classList.remove("visible");

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    }
  });
});

// Back to top button

const backToTop = document.querySelector(".backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // show button after scrolling 200px
    backToTop.style.opacity = "1";
    backToTop.style.pointerEvents = "auto";
  } else {
    backToTop.style.opacity = "0";
    backToTop.style.pointerEvents = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

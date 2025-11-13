document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const marquee = document.querySelector(".marquee-track");
  if (marquee) {
    const clone = marquee.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.style.animationDelay = "-8s";
    marquee.parentElement?.appendChild(clone);
  }
});

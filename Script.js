// document.addEventListener("DOMContentLoaded", () => {
//   // Scroll-triggered fade-in animation
//   const animatedEls = document.querySelectorAll(
//     "section, .edu-item, .home-content .text, .home-content .image"
//   );

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       });
//     },
//     { threshold: 0.2 }
//   );

//   animatedEls.forEach((el) => {
//     el.classList.add("fade-in-up");
//     observer.observe(el);
//   });

//   // Always show the current year in the footer
//   const yearEl = document.getElementById("year");
//   if (yearEl) {
//     yearEl.textContent = new Date().getFullYear();
//   }
// });
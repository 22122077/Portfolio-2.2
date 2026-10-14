/* PARALLAX - plain JavaScript, rewritten from the original jQuery version (jQuery is no longer used in this subject).
   Moves each parallax section's background at a fraction of the scroll speed - set the fraction with data-speed in the HTML.
   Skipped when the visitor's system asks to reduce motion. */
const parallaxSections = document.querySelectorAll('section[data-type="background"]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function moveBackgrounds() {
  if (reduceMotion.matches) {
    return;
  }
  parallaxSections.forEach(function (section) {
    const yPos = -(window.scrollY / section.dataset.speed);
    section.style.backgroundPosition = '50% ' + yPos + 'px';
  });
}

window.addEventListener('scroll', moveBackgrounds, { passive: true });

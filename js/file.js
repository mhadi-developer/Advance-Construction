document.addEventListener('DOMContentLoaded', function () {
  const topNav = document.querySelector('.top-nav');
  const mainNav = document.querySelector('.main-nav');
  if (!mainNav) {
    console.warn('.main-nav not found');
    return;
  }

  // helper to check if topNav is visible (media queries may hide it)
  function topNavHeight() {
    if (!topNav) return 0;
    const style = window.getComputedStyle(topNav);
    if (style.display === 'none' || topNav.offsetHeight === 0) return 0;
    return topNav.offsetHeight;
  }

  // toggles fixed class and adjusts body padding to prevent content jump
  function updateNavState() {
    const scrollY = window.scrollY || window.pageYOffset;
    const tHeight = topNavHeight();

    if (scrollY > tHeight) {
      if (!mainNav.classList.contains('fixed')) {
        // set body padding to reserve space the main-nav had in flow
        const navHeight = mainNav.offsetHeight;
        document.body.style.paddingTop = navHeight + 'px';

        mainNav.classList.add('fixed');
        // small visual slide (optional). remove if you don't want it.
        requestAnimationFrame(() => mainNav.classList.remove('slide-up'));
        requestAnimationFrame(() => mainNav.classList.add('slide-up'));
      }
    } else {
      if (mainNav.classList.contains('fixed')) {
        mainNav.classList.remove('fixed', 'slide-up');
        // remove reserved padding
        document.body.style.paddingTop = '';
      }
    }
  }

  // initial state (in case page loads scrolled)
  updateNavState();

  window.addEventListener('scroll', updateNavState, { passive: true });
  window.addEventListener('resize', updateNavState);
});

// Preloader fades away after exactly 3 seconds
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("pl-preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("pl-fade-out");
      setTimeout(() => {
        preloader.remove(); // completely remove from DOM
      }, 600); // matches CSS transition time
    }, 3000); // 3 seconds sharp
  }
});

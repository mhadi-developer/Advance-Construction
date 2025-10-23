document.addEventListener("DOMContentLoaded", function () {
  const gridElem = document.querySelector(".grid");
  const filterLinks = document.querySelectorAll(".filters a");

  imagesLoaded(gridElem, function () {
    const iso = new Isotope(gridElem, {
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-sizer"
      },
      transitionDuration: "0.4s"
    });

    filterLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const filterValue = link.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });

        filterLinks.forEach(a => a.classList.remove("is-checked"));
        link.classList.add("is-checked");
      });
    });
  });
});

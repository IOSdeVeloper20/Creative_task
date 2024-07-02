// Add an event listener to detect scrolling
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var navbar = document.getElementsByClassName("navbar")[0];
  var nav_brand = this.document.querySelector(".navbar-brand");
  var nav_ul = this.document.querySelectorAll(".nav-link");

  if (scrollPosition > 140) {
    navbar.classList.add("navbar-change");
    navbar.classList.remove("bg-transparent");
    nav_brand.classList.add("navbrand-change");

    for (let i = 1; i < nav_ul.length; i++) {
      var ul_element = nav_ul[i];
      ul_element.style.color = "grey";
    }
  } else {
    navbar.classList.remove("navbar-change");
    navbar.classList.add("bg-transparent");
    nav_brand.classList.remove("navbrand-change");

    nav_ul.forEach(function (navLink) {
      navLink.style.color = "";
    });
  }
});

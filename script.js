// Add an event listener to detect scrolling
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var navbar = document.getElementsByClassName("navbar")[0];
  var nav_brand = this.document.querySelector(".navbar-brand");
  var nav_ul = this.document.querySelectorAll(".nav-link");
  var scroll_button = this.document.getElementsByClassName('.scroll-button');

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


// $(document).ready(function(){
//   $('.slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots: true,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });
// });

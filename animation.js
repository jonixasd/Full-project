// navbar sticky affect

window.addEventListener('scroll', function () {
  var stickyNavbar = document.querySelector('header');
  stickyNavbar.classList.toggle('sticky', window.scrollY > 0);
});

// Owlcarousel

// $(document).ready(function () {
//   $('.owl-carousel').owlCarousel();
// });

// $('.owl-carousel').owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 3,
//     },
//     1000: {
//       items: 5,
//     },
//   },
// });

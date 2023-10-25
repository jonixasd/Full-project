// navbar sticky affect

window.addEventListener('scroll', function () {
  var stickyNavbar = document.querySelector('header');
  stickyNavbar.classList.toggle('sticky', window.scrollY > 0);
});

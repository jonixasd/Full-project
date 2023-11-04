// navbar sticky affect

window.addEventListener('scroll', function () {
  var stickyNavbar = document.querySelector('.site-header');
  stickyNavbar.classList.toggle('sticky', window.scrollY > 0);
});

// nav responsive

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');

  toggleBtnIcon.classList = isOpen ? 'fas fa-bars fa-2x' : 'fas fa-times fa-2x';
};

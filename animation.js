// navbar sticky affect

window.addEventListener('scroll', function () {
  var stickyNavbar = document.querySelector('.site-header');
  stickyNavbar.classList.toggle('sticky', window.scrollY > 0);
});

// nav responsive

function showDropdown() {
  const Dropdown = document.querySelector('.dropdown_menu');
  Dropdown.style.display = 'flex';
  const toggleBtnClose = document.querySelector('.toggle_btn,.toggle-btn i');
  toggleBtnClose.style.display = 'none';
  const CloseBtn = document.querySelector('.close_btn,.close_btn i');
  CloseBtn.style.display = 'block';
}
function hideDropdown() {
  const Dropdown = document.querySelector('.dropdown_menu');
  Dropdown.style.display = 'none';
  const toggleBtnClose = document.querySelector('.toggle_btn,.toggle-btn i');
  toggleBtnClose.style.display = 'block';
  const CloseBtn = document.querySelector('.close_btn,.close_btn i');
  CloseBtn.style.display = 'none';
}

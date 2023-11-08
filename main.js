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

// cart alert

function cartAlert() {
  alert('已收到你的報名資訊，感謝你~');
}

//Owl carousel

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1800: {
      items: 1,
    },
  },
});

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1, // Change the number of items to display
    loop: true, // Set to true if you want the carousel to loop
    margin: 10, // Adjust the margin between items
    // Add other options as needed
  });
});

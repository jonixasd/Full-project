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
  loop: true, // 循環播放
  margin: 10, // 外距 10px
  nav: true, // 顯示點點
  responsive: {
    0: {
      items: 1, // 螢幕大小為 0~600 顯示 1 個項目
    },
    600: {
      items: 3, // 螢幕大小為 600~1000 顯示 3 個項目
    },
    1000: {
      items: 5, // 螢幕大小為 1000 以上 顯示 5 個項目
    },
  },
});

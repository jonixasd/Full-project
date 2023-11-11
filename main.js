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

function loginAlert() {
  alert('您已登入會員!');
}
function Activity() {
  alert('您已成功報名此活動! 請注意活動參加時間，詳情請看活動檔期。');
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

// robot

var r = true;
$('#chat-container').delay(1000).fadeOut('slow');
$('#chat-icon').click(function () {
  ch();
});

function ch() {
  $('#chat-container').toggle(function () {});
}

function keyin() {
  var keyCode = event.which;
  if (keyCode == 13) {
    $('#chat-text').append(
      '<div class="ans2">' +
        document.getElementById('textarea').value +
        '</div><br>'
    );
    $('#textarea').val('');
    appw();
    event.preventDefault();
  }
}

function appw() {
  setTimeout(function () {
    $('#chat-text').append(app());
    var e = document.getElementById('textarea');
    e.scrollTop = e.scrollHeight;
    e.scrollLeft = e.scrollLeft;
  }, 500);
  textarea;
}

function app() {
  var c = Math.floor(Math.random() * 3);
  if (c % 3 == 0) {
    return '<div class="ans1">歡迎來到客服專區，有任何問題都歡迎詢問，若無法百分百滿足您的問題，還請致電或電郵告知。</div><br>';
  }
  if (c % 3 == 1) {
    return '<div class="ans1">感謝您的意見，我們會盡快請專人回復您</div><br>';
  }

  if (c % 3 == 2) {
    return '<div class="ans1">忙線中，請稍後再試。</div><br>';
  }
}

// Smooth scroll

// const body = document.body,
//   scrollWrap = document.getElementsByClassName('smooth-scroll')[0],
//   height = scrollWrap.getBoundingClientRect().height - 0.5,
//   speed = 0.04;

// var offset = 0;

// body.style.height = Math.floor(height) + 'px';

// function smoothScroll() {
//   offset += (window.pageYOffset - offset) * speed;

//   var scroll = 'translateY(-' + offset + 'px) translateZ(0)';
//   scrollWrap.style.transform = scroll;

//   callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();

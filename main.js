// cart alert

function loginAlert() {
  alert('您已登入會員!');
}
function Activity() {
  alert('您已成功報名此活動! 請注意活動參加時間，詳情請看活動檔期。');
}
function social() {
  alert('請重連網路後再試。');
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
      items: 1,
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
$('#chat-container').delay(500).fadeOut('fast');
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
    return '<div class="ans1">感謝您的意見，我們會盡快請專人回覆您</div><br>';
  }

  if (c % 3 == 2) {
    return '<div class="ans1">忙線中，請稍後再試。</div><br>';
  }
}

function openChat() {
  window.open(
    'index.html',
    '_blank',
    'statusbar=no,menubar=yes,toolbar=yes,top=100,left=200,width=440px,height=732px'
  );
}

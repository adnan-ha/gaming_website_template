$(document).ready(function () {
  // Start navbar slide down
  $('.header .logo-search .bars-icon').on('click', function () {
    $('.header .links').slideToggle('fast');
    $(this).toggleClass('fa-times fa-bars-staggered');
  })
  // End navbar slide down

  // Start Slider items
  var swiper = new Swiper(".featured-games .content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    grapCursor: "true",
    fade: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 26,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 25,
      }
    }
  })

  setInterval(function () {
    $('.swiper-button-next').click();
  }, 5000)
  // End Slider items

  // make all the image in the same height in live stream section
  let imgWidth = $('.live-stream .box img:not(.avatar)').width();
  $('.live-stream .box img:not(.avatar)').height(imgWidth);

  // fadeIn and fadeOut the info of a strem
  $('.live-stream .box .image').each(function () {
    $(this).hover(function () {
      $(this).children('a').fadeIn(300)
    }, function () {
      $(this).children('a').fadeOut(300)
    }
    );
  })

  // Check the connection

  let connectionStatus = $('.first-section .profile-info .status .connection-status')[0];
  console.log(connectionStatus);

  if (navigator.onLine) {
    online()
  } else {
    offline()
  }

  window.addEventListener('online', online);
  window.addEventListener('offline', offline);

  function online() {
    connectionStatus.innerHTML = 'Online';
  }

  function offline() {
    connectionStatus.innerHTML = 'Offline';
  }
});

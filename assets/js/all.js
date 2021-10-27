"use strict";

// 表單驗證
(function () {
  'use strict'; // Fetch all the forms we want to apply custom Bootstrap validation styles to

  var forms = document.querySelectorAll('.needs-validation'); // Loop over them and prevent submission

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})(); // 首頁-店家資訊swiper


var swiper = new Swiper(".about-us-Swiper", {
  spaceBetween: 30,
  pagination: {
    el: ".about-us-swiper-pagination",
    clickable: true
  }
}); //關於我們-電腦版咖啡師介紹swiper

var swiper = new Swiper(".coffee-chef-Swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".coffee-chef-swiper-pagination",
    clickable: true
  }
}); //關於我們-平板/手機咖啡師介紹swiper

var swiper = new Swiper(".coffee-chef-md-mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".coffee-chef-md-swiper-pagination",
    clickable: true
  }
});
$(document).ready(function () {
  $('.dropdown').click(function (e) {
    //下拉選單箭頭旋轉動畫
    $('.caret').stop().toggleClass('caret-change__active');
  }); //按鈕點擊下拉動畫

  $('.link-btn-animate').click(function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    var linkScroll = $(anchor).offset().top;
    $('html,body').stop().animate({
      scrollTop: linkScroll - 180
    }, 300);
  }); //偵測滑鼠滾動顯示/隱藏

  $(window).scroll(function (e) {
    var scrollHeight = $(this).scrollTop();

    if (scrollHeight > 350) {
      $('.scroll-top-btn').show();
    } else {
      $('.scroll-top-btn').hide();
    }
  }); //點擊回到最上層

  $('.scroll-top-btn').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 300);
  });
  $('.parallax-window').parallax({
    imageSrc: './assets/images/banner.jpg'
  });
});
//# sourceMappingURL=all.js.map

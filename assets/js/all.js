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
}); //下拉選單動畫

$(document).ready(function () {
  $('.dropdown').click(function (e) {
    //箭頭旋轉動畫
    $('.caret').stop().toggleClass('caret-change__active');
  }); //下拉式選單動畫
  // $('#myDropdown').on('show.bs.dropdown', function () {
  //   $('.dropdown-menu').stop().slideToggle(600);
  // })
});
//# sourceMappingURL=all.js.map

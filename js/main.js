$(document).ready(function(){
    var swiper = new Swiper(".section_1 .mySwiper, .section_6 .mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    var num = 0;

    $('.section_5 .mo_btn>.right').click(function(){
  
        num++;
        if(num > 2){
            num = 0;
        }
        console.log(num);
  
        $('.section_5 .sec_slide').animate({
            left: (-100 * num) + "%" 
        });
  
    });

    $('.section_5 .mo_btn>.left').click(function(){
  
      num--;
      if(num < 0){
          num = 2;
      }

      $('.section_5 .sec_slide').animate({
          left: (-100 * num) + "%" 
      });

    });

    var swiper = new Swiper(".section_3 .mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
});
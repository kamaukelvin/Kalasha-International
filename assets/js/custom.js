// Slick

  $('.slicked').slick({
  
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      prevArrow:'.prev-arrow',
      nextArrow: '.next-arrow',
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll:1,
            draggable: true
          }
        }
      ]
    });
    $('.slicked__card').slick({
  
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow:'.prev-arrow',
      nextArrow: '.next-arrow',
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll:1,
            draggable: true
          }
        }
      ]

     
    });
    $('.slick__partners').slick({
  
    
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll:1,
            draggable: true
          }
        },
        {
          breakpoint: 360,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll:1,
            draggable: true
          }
        },
        {
          breakpoint: 500,
          settings: 'unslick'
        },
        {
          breakpoint: 4480,
          settings: 'unslick'
        },
    {
      breakpoint: 1024,
          settings: 'unslick'
    },
    {
      breakpoint: 769,
      settings: 'unslick'
    },
      ]

     
    });

    $(document).ready(function(){

      $(function(){
       
          $(document).on( 'scroll', function(){
       
            if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
          } else {
            $('.scroll-top-wrapper').removeClass('show');
          }
        });
       
        $('.scroll-top-wrapper').on('click', scrollToTop);
      });
       
      function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
      }
      
      });
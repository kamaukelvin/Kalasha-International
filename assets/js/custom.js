// Slick

  $('.slicked').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1
          }
        }
      ]   
    });

    $('.slicked__card').slick({
      arrows:true,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1
          }
        }
      ] 
    });
    
    $('.slicked__partners').slick({
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

   $(".book_now").click(function(){
     $('html,body').animate({
       scrollTop:$("#book").offset().top},'slow')
     })
  






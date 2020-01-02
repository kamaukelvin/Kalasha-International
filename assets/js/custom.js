// Slick

  $('.slicked').slick({
  
      dots: true,
      infinite: false,
      speed: 300,
      responsive: [
          {
              breakpoint: 4480,
              settings: 'unslick'
            },
        {
          breakpoint: 768,
          settings: {
              settings: 'unslick'
          }
        },
        {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 4,
              dots: true,
              focusOnSelect: false,
              arrows: true,
              touchMove: false,
              draggable: true,
              swipe: true
          }
        },
        {
          breakpoint: 480,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true,
              focusOnSelect: false,
              arrows: true,
              touchMove: false,
              draggable: true,
              swipe: true
          }
        }
        
      ]
    });
    $('.slicked__card').slick({
  
      dots: true,
      infinite: false,
      speed: 300,
      responsive: [
          {
              breakpoint: 4480,
              settings: 'unslick'
            },
        {
          breakpoint: 768,
          settings: {
              settings: 'unslick'
          }
        },
        {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true,
              focusOnSelect: false,
              arrows: true,
              touchMove: false,
              draggable: true,
              swipe: true
          }
        },
        {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              focusOnSelect: false,
              arrows: true,
              touchMove: false,
              draggable: true,
              swipe: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
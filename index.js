//  Navigation Toogler

const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});




// Tstimonial SLider Using JQuery

$(document).ready(function() {
  var carousel = $('.carousel-inner');
  var carouselItemWidth = $('.carousel-item').outerWidth();

  $('.carousel-prev').click(function() {
    carousel.animate({ 'margin-left': '+=' + carouselItemWidth }, 300, function() {
      carousel.css('margin-left', 0);
      carousel.find('.carousel-item:last').after(carousel.find('.carousel-item:first'));
    });
  });

  $('.carousel-next').click(function() {
    carousel.animate({ 'margin-left': '-=' + carouselItemWidth }, 300, function() {
      carousel.css('margin-left', 0);
      carousel.find('.carousel-item:first').before(carousel.find('.carousel-item:last'));
    });
  });
});



// Team Member Carousel using Slick Slider


$(document).ready(function(){
  $('.team').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.prev-button').click(function() {
    $('.team').slick('slickPrev');
  });

  $('.next-button').click(function() {
    $('.team').slick('slickNext');
  });
});








// Header Watch Video Button Modal


var openmodal = document.querySelectorAll('.modal-open')
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener('click', function(event){
  event.preventDefault()
  toggleModal()
  })
}

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

var closemodal = document.querySelectorAll('.modal-close')
for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener('click', toggleModal)
}

document.onkeydown = function(evt) {
  evt = evt || window.event
  var isEscape = false
  if ("key" in evt) {
  isEscape = (evt.key === "Escape" || evt.key === "Esc")
  } else {
  isEscape = (evt.keyCode === 27)
  }
  if (isEscape && document.body.classList.contains('modal-active')) {
  toggleModal()
  }
};


function toggleModal () {
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  modal.classList.toggle('opacity-0')
  modal.classList.toggle('pointer-events-none')
  body.classList.toggle('modal-active')
}


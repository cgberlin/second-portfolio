$('#where-i-am').on('click', function(){
  hideEverything();
  $('#location-header').css('display', 'flex');
  $('#location-map').show();
  initMap();
});

$('#projects').on('click', function(){
  hideEverything();
  $('.project-image-container').css('display', 'flex');
});

$('#contact').on('click', function(){
  hideEverything();
  $('#contact-me').css('display', 'flex');
  $('#contact-me-bottom').css('display', 'flex');
});

$('#about-me').on('click', function(){
  hideEverything();
  $('#about-me-page').css('display', 'flex');
  $('#about-me-page-header').show();
});



$('.project-image-container').hover(function(){
  $(this).children(':first').css('-webkit-filter', 'grayscale(1)');
  $(this).children().show(400);
},
function(){
  $(this).children().css('-webkit-filter', 'grayscale(0)');
  $(this).children(':not(:first-child)').hide(400);
}
);

$('.contact-buttons').hover(function(){
  $(this).animate({width:'18%'}, 300);
},
function(){
  $(this).animate({width:'15%'}, 300);
}
);



function hideEverything(){
  $('.project-image-container').css('display', 'none');
  $('#location-map').hide();
  $('#location-header').css('display', 'none');
  $('#contact-me').hide();
  $('#contact-me-bottom').hide();
  $('#about-me-page').hide();
  $('#about-me-page-header').hide();
}

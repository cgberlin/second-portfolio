$('#where-i-am').on('click', function(){
  hideEverything();
  $('#location-header').css('display', 'flex');
  $('#location-map').show();
  initMap();
});

$('#projects').on('click', function(){
  hideEverything();
  $('.project-image-container').css('display', 'flex');
  $('.more-projects-button').show();
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
$('.more-projects-button').on('click', function(){
  $('.project-image-container').hide();
  $('.more-projects-button').hide();
  $('.project-image-container-2').css('display', 'flex');
});


$('.project-image-container').hover(function(){
  $(this).children(':first').css('-webkit-filter', 'grayscale(1)');
  $(this).children().show(200);
},
function(){
  $(this).children().css('-webkit-filter', 'grayscale(0)');
  $(this).children(':not(:first-child)').hide(200);
}
);
$('.project-image-container-2').hover(function(){
  $(this).children(':first').css('-webkit-filter', 'grayscale(1)');
  $(this).children().show(200);
},
function(){
  $(this).children().css('-webkit-filter', 'grayscale(0)');
  $(this).children(':not(:first-child)').hide(200);
}
);


$('.contact-buttons').hover(function(){
  $(this).css('-webkit-filter', 'invert(.8)');
},
function(){
  $(this).css('-webkit-filter', 'invert(.2)');
}
);




function hideEverything(){
  $('.project-image-container').css('display', 'none');
  $('.project-image-container-2').css('display', 'none');
  $('#location-map').hide();
  $('#location-header').css('display', 'none');
  $('#contact-me').hide();
  $('#contact-me-bottom').hide();
  $('#about-me-page').hide();
  $('#about-me-page-header').hide();
  $('.more-projects-button').hide();
}

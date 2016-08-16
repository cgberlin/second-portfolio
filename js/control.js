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
$('.project-image-container').hover(function(){
  $(this).children(':first').css('-webkit-filter', 'grayscale(1)');
},
function(){
  $(this).children().css('-webkit-filter', 'grayscale(0)');
}
);

function hideEverything(){
  $('.project-image-container').css('display', 'none');
  $('#location-map').hide();
  $('#location-header').css('display', 'none');
}

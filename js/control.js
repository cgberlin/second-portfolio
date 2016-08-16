$('#where-i-am').on('click', function(){
  $('#location-header').css('display', 'flex');
  $('#location-map').show();
  initMap();

});

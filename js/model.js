var map;

function initMap() {
  var marinaLat = {lat: 33.9803, lng: -118.4517};
  map = new google.maps.Map(document.getElementById('location-map'), {
    center: marinaLat,
    zoom: 12,
    tilt: 45
  });
  var marker = new google.maps.Marker({
  position: marinaLat,
  map: map,
  title: 'My Home!'
});
}

var map;

function initMap() {
  var marinaLat = {lat: 33.9803, lng: -118.4517};
  map = new google.maps.Map(document.getElementById('location-map'), {
    center: marinaLat,
    zoom: 13,
    tilt: 45,
    mapTypeId:'satellite'
  });

  var image = {
  url: 'images/home.svg',
  size: new google.maps.Size(71, 71),
  scaledSize: new google.maps.Size(40, 40)
};

  var marker = new google.maps.Marker({
  position: marinaLat,
  icon:image,
  map: map,
  title: 'My Home!',
});
}

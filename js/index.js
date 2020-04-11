

function initMap() {
    var india = { lat: 20.478843, lng: 79.940029 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: india,
        zoom: 8,
        mapTypeId: 'roadmap',
    });
}

window.onload = function () {
    displayStores();
}
//varible Declaration

var map;
var markers = [];
var infoWindow;

//Map intialisation function
function initMap() {
    var losAngeles = { lat: 34.063380, lng: -118.358080 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 11,
        mapTypeId: 'roadmap',
    });
    //calling infowindow function
     //infoWindow = new google.maps.infoWindow(); 

    //calling marker function
    infoWindow = new google.maps.InfoWindow();
    showStoreMarkers();

    

}


//Function for showing store data

function displayStores() {
    var storesHtml = '';

    for (var [index, store] of stores.entries()) {
        var address = store['addressLines'];
        var phone = store['phoneNumber'];
        storesHtml += `
      <div class="store-container">
      <div class="store-add-info">
          <div class="store-adress">
             ${address[0],address[1]}
          </div>
          <div class="store-phone-number">
              <i class="fas fa-phone-alt"></i>
              ${phone}
          </div>
      </div>
      <div class="store-number-container">
          <div class="store-number">${index+1}</div>
      </div>
     </div>
      <div class="hr">
      <hr>
       </div>
      `
      document.querySelector('.store-list').innerHTML = storesHtml;

    }
}
//Function for Store marker on the map
function showStoreMarkers(){
    var bounds = new google.maps.LatLngBounds();
    for (var [index, store] of stores.entries()){
        var latlng = new google.maps.LatLng(
            store["coordinates"]["latitude"],
            store["coordinates"]["longitude"]);

        var name = store["name"];
        var address = store["addressLines"] [0];
        bounds.extend(latlng);
        createMarker(latlng, name, address, index+1);

    }
    map.fitBounds(bounds);
}
//Marker function declaration
function createMarker(latlng, name, address, index){
    var html = "<br>" + name + "<br> <br>" + address;
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        label: index.toString()
    });
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
    });
    markers.push(marker);
}
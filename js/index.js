
window.onload = function () {
    displayStores();
}


function initMap() {
    var india = { lat: 20.478843, lng: 79.940029 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: india,
        zoom: 8,
        mapTypeId: 'roadmap',
    });
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
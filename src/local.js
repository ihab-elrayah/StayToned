var map;
var geocoder;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.1, lng: -95.7}, // Default center in the US
        zoom: 10
    });
    geocoder = new google.maps.Geocoder();
}

function searchGyms() {
    var zipCode = document.getElementById('zip').value;
    var listingElement = document.getElementById('listing');
    listingElement.innerHTML = ''; // Clear previous results

    geocoder.geocode({ 'address': zipCode }, function(results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            map.setZoom(13); // Suitable zoom level for city views

            var service = new google.maps.places.PlacesService(map);
            var request = {
                location: results[0].geometry.location,
                radius: '5000', // Search within 5 kilometers
                type: ['gym']  // Search for gyms
            };

            service.nearbySearch(request, function(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    results.forEach(function(place) {
                        createMarker(place);
                        // Append place details to listing
                        var details = document.createElement('div');
                        details.innerHTML = '<strong>' + place.name + '</strong><br>' +
                                            'Rating: ' + (place.rating ? place.rating : "N/A") + '<br>' +
                                            '<small>' + place.vicinity + '</small>';
                        listingElement.appendChild(details);
                    });
                } else {
                    listingElement.innerHTML = '<p>No gyms found in this area.</p>';
                }
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name
    });

    var infowindow = new google.maps.InfoWindow({
        content: '<div><strong>' + place.name + '</strong><br>' +
                  'Rating: ' + (place.rating ? place.rating : "N/A") + '</div>'
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
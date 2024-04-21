// import {useMap, useMapsLibrary} from '@vis.gl/react-google-maps';
// import Helmet from "react-helmet"
// import { useState } from 'react';

// import { APIProvider, useMapsLibrary } from '@react-google-maps/api';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const code = `
<input type="text" id="zip" placeholder="Enter ZIP code">
        <button onclick="searchGyms()">Find Gyms</button>
        <div id="map"></div>
        <div id="listing"></div>
        <script>
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
        </script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8DCwn3U6yS0fhuoLbOGCsEoX6tDv8QRA&libraries=places&callback=initMap"></script>
`;

function Map () {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyC8DCwn3U6yS0fhuoLbOGCsEoX6tDv8QRA"
  // });

  // const renderMap = () => {
  //   return (
  //     <GoogleMap
  //       center={{ lat: 39.09366509575983, lng: -94.58751660204751 }}
  //       zoom={8}
  //       mapContainerStyle={{
  //         margin: "20px 0 0",
  //         height: "30vh",
  //         width: "100%"
  //       }}
  //     >
  //       <Marker
  //         position={{ lat: 39.09366509575983, lng: -94.58751660204751 }}
  //       />
  //     </GoogleMap>
  //   );
  // };

  // return isLoaded ? renderMap() : null;
  return <div dangerouslySetInnerHTML={{__html: code}}></div>;
}

// function Map () {

//   return (
//     <>
//     <Helmet>
//       <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8DCwn3U6yS0fhuoLbOGCsEoX6tDv8QRA&libraries=places&callback=initMap" async defer></script>
//         <script>
//         </script>
//     </Helmet>
//     <input type="text" id="zip" placeholder="Enter ZIP code" />
//         <button onclick="searchGyms()">Find Gyms</button>
//         <div id="map"></div>
//         <div id="listing"></div>
//     </>
//   );
// }

/*
  const map = useMap();
  const placesLib = useMapsLibrary('places');
  const [placesService, setPlacesService] = useState(null);

  useEffect(() => {
    if (!placesLib || !map) return;

    setPlacesService(new placesLib.PlacesService(map));
  }, [placesLib, map]);

  useEffect(() => {
    if (!placesService) return;

    // ...use placesService...
  }, [placesService]);

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
  }*/

export default Map;
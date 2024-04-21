import React, { useEffect, useState } from 'react';
// import { Loader } from '@googlemaps/js-api-loader';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';


// const GOOGLE_MAPS_API_KEY = 'AIzaSyC8DCwn3U6yS0fhuoLbOGCsEoX6tDv8QRA'; // Replace with your API key

// const loader = new Loader({
//   apiKey: "AIzaSyC8DCwn3U6yS0fhuoLbOGCsEoX6tDv8QRA",
//   version: "weekly",
//   libraries: ["places"]
// });

const mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};

const FindGyms = () => {
  
  const position = {lat: 61.2176, lng: -149.8997};

  return (
    <>
    <APIProvider apiKey={'AIzaSyC8DCwn3U6yS0fhuoLbOGCsEoX6tDv8QRA'}>
      <Map center={position} zoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
    </>
  );
};

export default FindGyms;
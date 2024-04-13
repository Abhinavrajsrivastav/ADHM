import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    // Initialize the map when the component mounts
    initMap();
  }, []);

  const initMap = () => {
    const myLatLng = { lat: 26.77408, lng: 82.19842 };

    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: myLatLng
    });

    new window.google.maps.Marker({
      position: myLatLng,
      map: map
    });

    map.panTo(myLatLng);
  };

  return (
    <div id="map" style={{ width: '100%', height: '100vh' }}></div>
  );
}

export default Map;

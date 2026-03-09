import React, { useEffect, useState } from 'react';
import { listDesasaters } from '../services/Desasterservices';

const DesastersMap = () => {
  const [disasters, setDisasters] = useState([]);
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    // Fetch disasters from the API
    listDesasaters()
      .then((response) => {
        setDisasters(response.data);
      })
      .catch((error) => {
        console.error('Error fetching disasters:', error);
      });
  }, []);

  useEffect(() => {
    
    if (!window.google) {
      
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA1zOG9jqY5jjy-lEZMDf6DifpXL5bAAo8`;
      script.async = true;
      document.body.appendChild(script);
  
    
      script.onload = () => {
        initMap();
      };
  
    
      return () => {
        document.body.removeChild(script);
      };
    } else {
     
      initMap();
    }
  }, []);

  // Function to initialize the map
  const initMap = () => {
   
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    });

    // Add markers for each disaster
    disasters.forEach((disaster) => {
      const [latitude, longitude] = disaster.location.split(',').map(parseFloat);
      const marker = new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
       
      });

      // Create info window content
      const contentString = `<div><strong>${disaster.disasterName}</strong><br>Date: ${disaster.date}<br>country: ${disaster.picture}</div>`;
      
      
      const infoWindow = new window.google.maps.InfoWindow({
        content: contentString,
      });

      // show info window on marker hover
      marker.addListener('mouseover', () => {
        infoWindow.open(map, marker);
        setInfoWindow(infoWindow);
      });

    
      marker.addListener('mouseout', () => {
        infoWindow.close();
      });
    });
  };

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default DesastersMap;

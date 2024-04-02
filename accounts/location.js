// Replace YOUR_API_KEY with your actual Google Maps API key
function initMap() {
    const mapElement = document.getElementById('map');
    const map = new google.maps.Map(mapElement, {
      zoom: 13
    });
  
    // Create a marker to indicate selected location (initially hidden)
    const marker = new google.maps.Marker({
      map: map,
      visible: false
    });
  
    // Function to update marker position and display address
    function updateLocation(latLng) {
      marker.setPosition(latLng);
      marker.setVisible(true);
  
      // Use Geocoder API to reverse geocode and display address (optional)
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: latLng }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            const address = results[0].formatted_address;
            console.log("Your selected location:", address);
            // You can display the address in a separate element here
          }
        }
      });
    }
  
    // Add click listener to the map to capture user selection
    google.maps.event.addListener(map, 'click', function(event) {
      const clickedLocation = event.latLng;
      updateLocation(clickedLocation);
    });
  }
  
  // Include the Google Maps JavaScript API library with your API key
  const script = document.createElement('script');
  script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap";
  script.async = true;
  document.body.appendChild(script);
  
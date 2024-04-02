function validateAndSave() {
    const gender = document.getElementById('gender').value;
    const location = document.getElementById('location').value.trim();
    const bio = document.getElementById('bio').value.trim();
    let isValid = true;

    // Validate gender
    if (!gender) {
        document.getElementById('gender-error').innerText = 'Please select your gender';
        isValid = false;
    } else {
        document.getElementById('gender-error').innerText = '';
    }

    //phone error
    if (!phone){
        document.getElementById('phone-error').innerText = 'Please enter your phone number';
        isValid = false;
    }
    else{
        document.getElementById('phone-error').innerText = '';
    }

    // Validate location
    if (!location) {
        document.getElementById('location-error').innerText = 'Please enter your local address location';
        isValid = false;
    } else {
        document.getElementById('location-error').innerText = '';
    }

    // If all fields are valid, submit the form
    if (isValid) {
        // Simulating backend integration (replace with actual API call)
        console.log('Submitting data to the server...');
        console.log('Gender:', gender);
        console.log('Location:', location);
        console.log('Bio:', bio);

        // Reset form fields
        document.getElementById('gender').value = '';
        document.getElementById('location').value = '';
        document.getElementById('bio').value = '';

        alert('Account details updated successfully!');
        window.location.href = "personal.html";
    }
}

//getting user location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const locationInput = document.getElementById('location');
                locationInput.value = `${position.coords.latitude}, ${position.coords.longitude}`;
            },
            (error) => {
                console.error(error);
                alert('Error getting location. Please try again or enter manually.');
            }
        );
    } else {
        alert('Geolocation is not supported by this browser. Please enter your location manually.');
    }
}

    // Construct the URL with query parameters
const queryParams = new URLSearchParams();
queryParams.set('gender', gender);
queryParams.set('location', location);
queryParams.set('phone', countryCode + phone);
queryParams.set('bio', bio);

// Redirect to the new page with the query parameters
window.location.href = 'personal.html?' + queryParams.toString();

// Retrieve query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
document.getElementById('gender').textContent = urlParams.get('gender');
document.getElementById('location').textContent = urlParams.get('location');
document.getElementById('phone').textContent = urlParams.get('phone');
document.getElementById('bio').textContent = urlParams.get('bio');
// Get the form elements
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');
const submitButton = document.getElementById('submit');

// Set initial state of submit button
submitButton.disabled = true;
submitButton.style.backgroundColor = 'gray';

// Function to validate form
function validateForm() {
  // Check if all fields are filled
  if (nameInput.value && passwordInput.value && emailInput.value && mobileInput.value) {
    // Check if email is valid
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
      // Check if mobile number is valid
      if (/^[0-9]{10}$/.test(mobileInput.value)) {
        // Enable submit button and change color
        submitButton.disabled = false;
        submitButton.style.backgroundColor = 'green';
      } else {
        // Disable submit button and change color
        submitButton.disabled = true;
        submitButton.style.backgroundColor = 'gray';
      }
    } else {
      // Disable submit button and change color
      submitButton.disabled = true;
      submitButton.style.backgroundColor = 'gray';
    }
  } else {
    // Disable submit button and change color
    submitButton.disabled = true;
    submitButton.style.backgroundColor = 'gray';
  }
}

// Add event listeners to form fields
nameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
mobileInput.addEventListener('input', validateForm);
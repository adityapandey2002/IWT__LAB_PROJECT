const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');
const submitButton = document.getElementById('submit');

function validateForm() {
	if (nameInput.value && passwordInput.value && emailInput.value && mobileInput.value) {
		if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
			if (/^[0-9]{10}$/.test(mobileInput.value)) {
				submitButton.disabled = false;
				submitButton.style.backgroundColor = 'green';
			} else {
				submitButton.disabled = true;
				submitButton.style.backgroundColor = 'gray';
			}
		} else {
			submitButton.disabled = true;
			submitButton.style.backgroundColor = 'gray';
		}
	} else {
		submitButton.disabled = true;
		submitButton.style.backgroundColor = 'gray';
	}
}

nameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
mobileInput.addEventListener('input', validateForm);
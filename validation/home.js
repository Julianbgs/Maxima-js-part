document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', function(event) {
        errorMessages.innerHTML = '';
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (!email || !password || !confirmPassword) {
            showError('All fields are required');
            event.preventDefault();
            return;
        }

        if (!validateEmail(email)) {
            showError('Invalid email format');
            event.preventDefault();
            return;
        }

        if (password !== confirmPassword) {
            showError('Passwords do not match');
            event.preventDefault();
            return;
        }

        if (password.length < 8) {
            showError('Password should be at least 8 characters long');
            event.preventDefault();
            return;
        }
    });

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function showError(message) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = message;
        errorMessages.appendChild(errorMessage);
    }
});
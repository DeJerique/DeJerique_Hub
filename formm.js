
if (document.getElementById('registration-form')) {
    document.getElementById('registration-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        var usernameInput = document.getElementById('username');
        var passwordInput = document.getElementById('password');
        var confirmPasswordInput = document.getElementById('confirm-password');

        var username = usernameInput.value;
        var password = passwordInput.value;
        var confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }else {
            alert(`Welcome ${username} You have Successfully Registered`)
        }

        // Store the username and password in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Redirect to the sign-in page after registration
        setTimeout(function () {
            window.location.href = 'signnin.html';
        }, 3000);
    });
}

// Sign-in form
if (document.getElementById('signin-form')) {
    document.getElementById('signin-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var usernameInput = document.getElementById('username');
        var passwordInput = document.getElementById('password');

        var username = usernameInput.value;
        var password = passwordInput.value;

        // Retrieve stored username and password from local storage
        var storedUsername = localStorage.getItem('username');
        var storedPassword = localStorage.getItem('password');

        // Check if entered credentials match stored values
        if (username === storedUsername && password === storedPassword) {
            alert('Sign-in successful! Redirecting to another website...');

            setTimeout(function () {
                window.location.href = 'index.html';
            }, 3000);
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
}


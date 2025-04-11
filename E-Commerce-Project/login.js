const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    loginError.style.display = 'none';

    const email = emailField.value.trim();
    const password = passwordField.value;

    if (email === "" || password === "") {
        loginError.style.display = 'block';
        loginError.textContent = 'Please fill in both fields.';
        return;
    }

    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      
        const storage = rememberMeCheckbox.checked ? localStorage : sessionStorage;
        storage.setItem('loggedInUser', JSON.stringify(user));

        window.location.href = "Dashboard.html";
    } else {
        loginError.style.display = 'block';
        loginError.textContent = 'Invalid email or password.';
    }
});

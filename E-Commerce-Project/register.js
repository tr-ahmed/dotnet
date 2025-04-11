const registerForm = document.getElementById('registerForm');
const registerError = document.getElementById('registerError');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');

registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    registerError.style.display = 'none';

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

  
    if (!name || !email || !password || !confirmPassword) {
        registerError.style.display = 'block';
        registerError.textContent = 'Please fill in all fields.';
        return;
    }

   
    if (password !== confirmPassword) {
        registerError.style.display = 'block';
        registerError.textContent = 'Passwords do not match.';
        return;
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        registerError.style.display = 'block';
        registerError.textContent = 'Please enter a valid email address.';
        return;
    }

   
    if (password.length < 6) {
        registerError.style.display = 'block';
        registerError.textContent = 'Password must be at least 6 characters long.';
        return;
    }

   
    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        registerError.style.display = 'block';
        registerError.textContent = 'This email is already registered.';
        return;
    }

    
    const newUser = { name, email, password };
    users.push(newUser);

    
    localStorage.setItem('users', JSON.stringify(users));

   
    localStorage.setItem('loggedInUser', JSON.stringify(newUser));

    
    window.location.href = "Dashboard.html";
});

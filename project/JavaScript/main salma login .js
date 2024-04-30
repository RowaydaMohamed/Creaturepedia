function loginAndValidate() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const maleRadio = document.getElementById('male');
    const femaleRadio = document.getElementById('female');

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const gender = maleRadio.checked ? "Male" : (femaleRadio.checked ? "Female" : "");

    // Validate email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        return false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Validate password
    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long";
        return false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    // Store username if not already stored
    if (!localStorage.getItem('username')) {
        localStorage.setItem('username', username);
        alert(`Welcome, ${username}!`);
    } else {
        alert(`Welcome back, ${localStorage.getItem('username')}!`);
    }

    // Perform any other actions or submit the form as needed
    return true;
}



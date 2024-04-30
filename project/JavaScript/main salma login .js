function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // email format validation
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    // Validate email
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
    // Form is valid
    return true;
}

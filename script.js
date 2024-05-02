function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
  
    // Reset previous errors
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
  
    // Validate email
    if (email.trim() === "") {
      emailError.innerHTML = "Email is required";
      return;
    } else if (!isValidEmail(email)) {
      emailError.innerHTML = "Invalid email format";
      return;
    }
  
    // Validate password
    if (password.trim() === "") {
      passwordError.innerHTML = "Password is required";
      return;
    } else if (password.length < 6) {
      passwordError.innerHTML = "Password must be at least 6 characters long";
      return;
    }
  
    // If everything is valid, submit the form
    $.post( "checklogin.php", { email: email, password: password })
    .done(function( data ) {
        alert( data );
    });
  }
  
  function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
function validate(){
    let a = document.getElementById("usn").value;
    let b = document.getElementById("psd").value;
    let s = document.getElementById("p");
    

    // No empty inputs
    if (a === '' || b === '') {
        s.innerHTML = "* Please fill in Details first *";
        s.style.color = 'red';
        return false;
    }

    // Validate email format
    if (!isValidEmail(a)) {
        s.innerHTML = "* Invalid email format *";
        s.style.color = 'red';
        return false;
    }

    // Validate password
    if (b !== "password") {
        s.innerHTML = "* Incorrect Password *";
        s.style.color = 'red';
        return false;
    } else {
        // If both email and password are valid, move to the new page
        window.open("index.html");
        return true; // This line is optional since the function will exit after the redirect
    }
}

// To show password
function show() {
    var show = document.getElementById('psd');
    if (show.type == 'password') {
        show.type = 'text';             
    } else {
        show.type = 'password';
    }
}

function isValidEmail(a) {
    // Regular expression pattern for validating email
    const emailRegex = /^[^\s@]+\.ad\d{2}@bmsce\.ac\.in$/;
    return true;
}

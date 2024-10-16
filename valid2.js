function validateForm() {
    const name = document.getElementById("name").value.trim;
    const address = document.getElementById("address").value.trim;
    const email = document.getElementById("email").value.trim;
    const password = document.getElementById("password").value.trim;
    const mobile = document.getElementById("mobile").value.trim;
    const subject = document.getElementById("subject").value.trim;
    const agree = document.getElementById("agree").checked.trim;



    const nameError = document.getElementById("name-error");
    const addressError = document.getElementById("address-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const mobile = document.getElementById("mobile-error");
    const subjectError = document.getElementById("subject-error" );
    const agreeError = document.getElementById("agree-error");



    nameError.textContent = "";
    addressError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    subjectError.textContent = "";
    mobileError.textContent="";
    agreeError.textContent = "";

    
    if (!username || !email || !password || !mobile) {
        errorElement.textContent = 'All fields are required.';
        return;
    }




    
    if (name.includes(' ')) {
        errorElement.textContent = 'Username should not contain spaces.';
        return;
    }



    if (address === "") {
        addressError.textContent ="Please enter your address.";
    isValid = false;
    }
    
    if (!email.endsWith('@gmail.com')) {
        errorElement.textContent = 'Email must end with @gmail.com.';
        return;
    }

    
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
        errorElement.textContent = 'Password must contain at least one uppercase letter, one lowercase letter, and one digit.';
        return;
    }

    
    if (mobile.length !== 10 || isNaN(mobile)) {
        errorElement.textContent = 'Mobile number must be exactly 10 digits.';
        return;
    }
    if (subject === "") {
        subjectError.textContent ="Please select your course.";
        isValid = false;
    }
    if (!agree) {
        agreeError.textContent ="Please agree to the above information.";
        isValid = false;

    return isValid;
}
}


   // successElement.textContent = 'Form submitted successfully!';
//}




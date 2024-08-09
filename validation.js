document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('SignupForm');
    const generateOTPButton = document.getElementById('Generate-otp');
    const errorMessage = document.getElementById('error-message');

    let generatedOTP = '';

    generateOTPButton.addEventListener('click', function() {
        const email = document.getElementById('Email-input').value;
        if (!email) {
            errorMessage.textContent = 'Please enter an email address';
            return;
        }

        generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
        console.log(`OTP for ${email}: ${generatedOTP}`);
        localStorage.setItem("otp", `${generatedOTP}`)
        alert(`OTP sent to ${email}.`);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstname = document.getElementById('Firstname-input').value;
        const email = document.getElementById('Email-input').value;
        const password = document.getElementById('Password-input').value;
        const enteredOTP = document.getElementById('Enter-otp-input').value;

        if (!firstname || !email || !password || !enteredOTP) {
            errorMessage.textContent = 'Please fill in all fields';
            return;
        }

        if (enteredOTP !== generatedOTP) {
            errorMessage.textContent = 'Invalid OTP';
            return;
        }

    
        const userData = {
            firstname: firstname,
            email: email,
            password: password  
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Signup successful!');
        window.location.href = 'js/first-page.html';  
    });
});

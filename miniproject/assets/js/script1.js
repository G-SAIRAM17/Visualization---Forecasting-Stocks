// Get references to the form elements
const usernameField = document.querySelector("#username");
const passwordField = document.querySelector("#password");

        
        //Function to validate Username
        function validateUsername(username) {
            const usernamePattern = /^[a-zA-Z]+[0-9]*$/;
            return usernamePattern.test(username);
        }

        // Function to validate email
        function validateEmail(email) {
            const emailPattern = /.*@gmail\.com$/;
            return emailPattern.test(email);
        }

        function validatePassword(password) {
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            return passwordPattern.test(password);
        }
        
        // Function to validate Mobile Number
        function validateMobileNumber(mobileNumber) {
            const mobileNumberPattern = /^\d{10}$/; // Assumes a 10-digit mobile number
            return mobileNumberPattern.test(mobileNumber);
        }



        

// Add event listener for form submission
document.getElementById("signup").addEventListener("submit", validateForm);

        // Function to handle form submission for sign up
        function validateForm(event) {
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const mobileNumber=document.getElementById("number").value;
            const password = document.getElementById("password").value;

            if (!validateUsername(username)) {
                alert("Username should only contain alphabets (capital or lowercase) and/or numbers.");
                event.preventDefault();
                return false;
            }

            if (!validateEmail(email)) {
                alert("Email must end with '@gmail.com'.");
                event.preventDefault();
                return false;
            }

            if (!validateMobileNumber(mobileNumber)) {
                alert("Invalid mobile number");
                event.preventDefault();
                return false;
            }
            if (!validatePassword(password)) {
                alert("Password must be 8 characters long and contain at least one capital letter, one lowercase letter, one digit, and one special character.");
                event.preventDefault();
                return false;
            }


            return true;
        }
document.addEventListener('contextmenu', event => event.preventDefault())
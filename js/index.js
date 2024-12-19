    const passwordFields = document.getElementById("password");
    const seePsw = document.getElementById("seePsw");
    const noSeePsw = document.getElementById("noSeePsw");

    seePsw.addEventListener("click", () => {
        passwordFields.type = "text";
        seePsw.classList.add("d-none");
        noSeePsw.classList.remove("d-none");
    });

    noSeePsw.addEventListener("click", () => {
        passwordFields.type = "password";
        noSeePsw.classList.add("d-none");
        seePsw.classList.remove("d-none");
    });

    const regForm = document.getElementById('regForm');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('rpassword');

    // Real-time validation for password match
    confirmPasswordField.addEventListener('input', () => {
        const pwd = passwordField.value;
        const rpwd = confirmPasswordField.value;

        if (pwd !== rpwd) {
            confirmPasswordField.style.border = "2px solid red";
        } else {
            document.getElementById('pwd').style.border = "2px solid green";
            confirmPasswordField.style.border = "2px solid green";
        }
    });

    // Final validation on form submission
    regForm.addEventListener("submit", (event) => {
        const pwd = passwordField.value;
        const rpwd = confirmPasswordField.value;

        if (pwd !== rpwd) {
            event.preventDefault(); // Stop form submission
            alert("Passwords do not match! Please recheck.");
            confirmPasswordField.style.border = "2px solid red";
        }
    });

    
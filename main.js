const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const zipInput = document.getElementById("zip");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

// Helper function to display error message
function showError(input, message) {
  const errorDiv = document.getElementById(`${input.id}-error`);
  input.classList.add("error");
  errorDiv.innerText = message;
  input.classList.add("error");
  input.style.border = "2px solid #e74c3c";
}

// Helper function to remove error message
function removeError(input) {
  const errorDiv = document.getElementById(`${input.id}-error`);
  input.classList.remove("error");
  input.classList.remove("error");
  input.style.border = "none";
}

// Check if the email is valid
function checkEmail() {
  const emailValue = emailInput.value.trim();

  if (!emailValue) {
    showError(emailInput, "Email is required");
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    showError(emailInput, "Email is invalid");
  } else {
    removeError(emailInput);
  }
}

// Check if the country is valid
function checkCountry() {
  const countryValue = countryInput.value.trim();

  if (!countryValue) {
    showError(countryInput, "Country is required");
  } else {
    removeError(countryInput);
  }
}

// Check if the zip code is valid
function checkZip() {
  const zipValue = zipInput.value.trim();

  if (!zipValue) {
    showError(zipInput, "Zip Code is required");
  } else if (isNaN(zipValue) || zipValue.length !== 5) {
    showError(zipInput, "Zip Code is invalid");
  } else {
    removeError(zipInput);
  }
}

// Check if the password is valid
function checkPassword() {
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  if (!passwordValue) {
    showError(passwordInput, "Password is required");
  } else if (passwordValue.length < 8) {
    showError(passwordInput, "Password must be at least 8 characters");
  } else {
    removeError(passwordInput);
  }

  if (!confirmPasswordValue) {
    showError(confirmPasswordInput, "Please confirm your password");
  } else if (passwordValue !== confirmPasswordValue) {
    showError(confirmPasswordInput, "Passwords do not match");
  } else {
    removeError(confirmPasswordInput);
  }
}

// Event listeners for input validation
emailInput.addEventListener("blur", checkEmail);
countryInput.addEventListener("blur", checkCountry);
zipInput.addEventListener("blur", checkZip);
passwordInput.addEventListener("blur", checkPassword);
confirmPasswordInput.addEventListener("blur", checkPassword);

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
  checkCountry();
  checkZip();
  checkPassword();

  // If there are no errors, submit the form
  if (!document.querySelectorAll(".error").length) {
    form.submit();
  }
});

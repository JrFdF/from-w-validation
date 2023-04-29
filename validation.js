document.addEventListener(DOMContentLoaded, () => {
  const from = document.getElementById("my-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
  });
});

function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  let valid = true;

  if (name.value.trim() === "") {
    nameError.textContent = "Name is required";
    nameError.style.display = "block";
    valid = false;
  } else {
    nameError.textContent = "";
    nameError.style.display = "none";
  }

  if (email.value.trim() === "" || !validateEmail(email.value)) {
    emailError.textContent = "Valid email is required";
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.textContent = "";
    emailError.style.display = "none";
  }

  if (password.value.trim() === "" || password.value.lenght < 8) {
    passwordError.textContent = "Password must be at least 8 character";
    passwordError.style.display = "block";
    valid = false;
  } else {
    passwordError.textContent = "";
    passwordError.style.display = "none";
  }

  if (valid) {
    form.submit();
  }
}

function validateEmail(email) {
  const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return re.test(String(email).toLowerCase());
}

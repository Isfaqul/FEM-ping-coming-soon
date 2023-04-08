const formEl = document.querySelector("[data-form]");
const emailInput = document.querySelector("[data-input-email]");
const errorMessageEl = document.querySelector("[data-error-message]");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!isEmail(emailInput)) {
    showError();
  }

  removeError();
});

function isEmail(input) {
  const PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return PATTERN.test(input.value);
}

function removeError() {
  emailInput.addEventListener("click", () => {
    emailInput.classList.remove("showError");
    errorMessageEl.style.display = "none";

    if (!isEmail(emailInput) || emailInput.value === "example@email.com") {
      emailInput.value = "";
    }
  });
}

function showError() {
  errorMessageEl.style.display = "block";
  emailInput.classList.add("showError");
  emailInput.value = "example@email.com";
}

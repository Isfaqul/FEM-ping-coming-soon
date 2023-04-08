const formEl = document.querySelector("[data-form]");
const emailInput = document.querySelector("[data-input-email]");
const errorMessageEl = document.querySelector("[data-error-message]");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!PATTERN.test(emailInput.value)) {
    errorMessageEl.style.display = "block";
    emailInput.classList.add("showError");
    emailInput.value = "example@email.com";
  } else {
    emailInput.classList.remove("showError");
  }

  emailInput.addEventListener("click", () => {
    emailInput.classList.remove("showError");
    errorMessageEl.style.display = "none";
    emailInput.value = "";
  });
});

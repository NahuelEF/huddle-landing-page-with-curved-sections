const button = document.getElementById("button");
const messageError = document.getElementById("error");

button.addEventListener("click", () => {
  const userEmail = document.getElementById("email");
  if (!userEmail.checkValidity()) {
    messageError.textContent = "Check your email please";
    userEmail.classList.add("form__input--error");
  } else {
    messageError.textContent = "";
    userEmail.value = "";
    userEmail.classList.remove("form__input--error");
  }
});

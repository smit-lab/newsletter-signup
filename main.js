const emailField = document.getElementById("email-field"),
  submitBtn = document.getElementById("submit-btn"),
  emailTxt = document.getElementById("submitted-email"),
  errorMsg = document.getElementById("error-msg"),
  dismissedBtn = document.getElementById("dismissed-btn"),
  form = document.getElementById("form-type"),
  regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let submittedEmail = null,
  hero = document.querySelector(".hero"),
  submitCard = document.querySelector(".submit-card");

emailField.addEventListener("input", emailValidate);
submitBtn.addEventListener("click", submitValidate);

function emailValidate() {
  if (emailField.value.match(regexp)) {
    errorMsg.classList.remove("display");
    emailField.classList.remove("email__error-state");
    //console.log("correct email");
    submittedEmail = emailField.value;
    return true;
  } else {
    errorMsg.classList.add("display");
    emailField.classList.add("email__error-state");
    //console.log("incorrect email");
    return false;
  }
}

function submitValidate(event) {
  event.preventDefault();
  if (emailValidate()) {
    //console.log("please enter correct email");
    hero.classList.add("display-none");
    submitCard.classList.add("display-flex");
    submitCard.classList.add("fade-in");

    emailTxt.textContent = submittedEmail;
    console.log("submitted");
  }
}
dismissedBtn.addEventListener("click", () => {
  form.reset();
  hero.classList.remove("display-none");
  submitCard.classList.remove("display-flex");
  hero.classList.add("fade-in");
});

form.addEventListener("submit", submitValidate);

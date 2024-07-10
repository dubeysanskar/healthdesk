const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
});

//captcha code

// Function to generate a random 6-letter CAPTCHA code
function generateCaptcha() {
  var captcha = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  document.getElementById("captcha").innerHTML = captcha;
}

// Function to validate the user input against the generated CAPTCHA code
function validateCaptcha() {
  var userInput = document.getElementById("captchaInput").value.trim();
  var captcha = document.getElementById("captcha").innerHTML;
  if (userInput === captcha) {
    alert("CAPTCHA validation successful!");
    // Proceed with login or signup
  } else {
    alert("CAPTCHA validation failed. Please try again.");
    // Reset CAPTCHA or show error message
  }
}

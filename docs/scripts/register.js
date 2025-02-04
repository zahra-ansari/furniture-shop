import {} from "./scripts.js";

let $ = document;
let login = $.querySelector("#login");
let register = $.querySelector("#register");
let loginForm = $.querySelector("#login_form");
let registerForm = $.querySelector("#register_form");

login.addEventListener("click", function () {
  if (loginForm.classList.contains("hidden")) {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
  }
  login.style.color = "black";
  register.style.color = "#9ca3af";
});

register.addEventListener("click", function () {
  if (registerForm.classList.contains("hidden")) {
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  }
  register.style.color = "black";
  login.style.color = "#9ca3af";
});

const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];
//Progress Bar variable declaration
const progressBars = document.querySelectorAll(".progress-percent");
const values = ["90%", "85%", "80%", "25%", "22%"];
// Form Variable Declaration
const form = document.getElementById("form");
const nameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// for Hamburger Menu
function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle("change");
  // Toggle: making the menu active
  overlay.classList.toggle("overlay-active");
  // checking if the overlay contains
  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay // removes slide-left and add slide-right
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
  } else {
    // Animate Out - Overlay // removes slide right and adds slide-left
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
  }
}

// Form Validation Code
nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, messageInput];
const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};
// Event Listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
// Event Listener for Progress Bar
window.addEventListener("load", () => {
  progressBars.forEach((progress, index) => {
    progress.style.width = values[index];
  });
});
// Event Listener for Form Validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    alert("Form is Submitted");
  }
});
inputFields.forEach((input) => input.addEventListener("input", validateInputs));

//list of variables

const form = document.querySelector("form");
const inputText = document.querySelector("#input-text");
const haircutForm = document.querySelector("#haircutForm");
const date = document.querySelector("#date");
const barber = document.querySelector("#barber");
const hairstyle1 = document.querySelector("#longHair");
const hairstyle2 = document.querySelector("#shortHair");
const sandwichForm = document.querySelector("#sandwichForm");
const bread1 = document.querySelector("#bread1");
const bread2 = document.querySelector("#bread2");
const turkey = document.querySelector("#turkey");
const ham = document.querySelector("#ham");
const tomato = document.querySelector("#tomato");
const createForm = document.querySelector("#createForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

//event lisener for all forms

//#1
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(inputText.value);
  let message =
    "✅ Welcome: " +
    inputText.value +
    "Feel free to order a sandwich and book an appointment for a haircut! don't forget to create an account for easy access next time";
  if (inputText.value.length === 0) {
    alert("❌ Error! You must type your Name!!");
  } else {
    alert(message);
  }
  inputText.value = "";
});

//sandwich #2
sandwichForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let ingredients = "Your sandwich contains: ";
  if (bread1.checked) {
    ingredients += "White bread ";
  }
  if (bread2.checked) {
    ingredients += "Deli bun ";
  }
  if (turkey.checked) {
    ingredients += "Turkey ";
  }
  if (ham.checked) {
    ingredients += "Ham ";
  }
  if (tomato.checked) {
    ingredients += "Tomato ";
  }

  alert(ingredients);
});

// #3 make an appoinment
haircutForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let style =
    "Haircut scheduled for " + date.value + " with " + barber.value + " for ";
  if (hairstyle1.checked) {
    style += "Long hair";
  }
  if (hairstyle2.checked) {
    style += "Short hair";
  }
  alert(style);
});

//#4 create an account
createForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let confirmation =
    "You created an account! ✅ Your username is " +
    username.value +
    " & the email you used is " +
    email.value;
  if (password.value === confirmPassword.value) {
    alert(confirmation);
  } else {
    alert("Please try again! Passwords did not match. ❌");
  }
});

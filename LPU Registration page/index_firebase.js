const firebaseConfig = {
  apiKey: "AIzaSyB4py10VKvqXHYTuI0PCqQAdX610pYzlcE",
  authDomain: "form-validation-login-page.firebaseapp.com",
  databaseURL: "https://form-validation-login-page-default-rtdb.firebaseio.com",
  projectId: "form-validation-login-page",
  storageBucket: "form-validation-login-page.appspot.com",
  messagingSenderId: "108982704494",
  appId: "1:108982704494:web:ee0f5e8d334f3588e4c97f",
};

// initializeApp firebase

firebase.initializeApp(firebaseConfig);

var userInfo = firebase.database().ref("users_info");

document.getElementById("validateForm").addEventListener("submit", submit_form);

function submit_form(e) {
  e.preventDefault();

  var name = get_input_val("name");
  var email = get_input_val("email");
  var drop_down = get_input_val("drop_down");
  var gender = get_selected_radio_value("fgender");
  var pass = get_input_val("password");

  // Clear existing error messages
  clear_error_message();

  if (validate_form()) {
    save_message(name, email, drop_down, gender, pass);

    display_success_message("You have successfully registered!");
  } else if (!isErrorMessageDisplayed) {
    display_error_message(
      "Please fill out the form correctly before submitting."
    );
  }
}

function display_success_message(message) {
  var successMessage = document.getElementById("successMessage");
  successMessage.innerHTML = message;

  // Clear the success message after 3 seconds
  setTimeout(function () {
    successMessage.innerHTML = "";
  }, 3000);
}

function display_error_message(message) {
  var errorMessage = document.createElement("p");
  errorMessage.textContent = message;
  errorMessage.style.color = "Maroon";
  errorMessage.style.textAlign = "center";
  errorMessage.style.paddingTop = "-2px";
  errorMessage.style.fontWeight = "900";
  errorMessage.style.fontSize = "20px";
  errorMessage.id = "error_message";
  var formContainer = document.querySelector(".from_container");
  formContainer.appendChild(errorMessage);

  isErrorMessageDisplayed = true;

  // Remove the error message after 3 seconds
  setTimeout(function () {
    clear_error_message();
    isErrorMessageDisplayed = false;
  }, 3000);
}

function clear_error_message() {
  var existingErrorMessage = document.getElementById("error_message");
  if (existingErrorMessage) {
    existingErrorMessage.remove();
  }
  isErrorMessageDisplayed = false;
}

function save_message(name, email, drop_down, gender, pass) {
  var new_form = userInfo.push();

  new_form.set({
    Name: name,
    Email_ID: email,
    City: drop_down,
    Gender: gender,
    Password: pass,
  });
}

// Document.getelementById in one function for no repatation

function get_input_val(id) {
  return document.getElementById(id).value;
}

function get_selected_radio_value(name) {
  var radios = document.getElementsByName(name);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return null;
}

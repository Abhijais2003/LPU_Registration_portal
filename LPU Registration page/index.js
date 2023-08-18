function clear_errors() {
  errors = document.getElementsByClassName("form_error");
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function set_error(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("form_error")[0].innerHTML = error;
}

function validate_form() {
  var return_val = true;

  clear_errors();

  // Name validation
  var name = document.forms["my_form"]["fname"].value;

  if (name.length < 5) {
    set_error("inp-1", "*Please enter a vaild name");
    return_val = false;
  }

  if (name.length == 0) {
    set_error("inp-1", "*Name cannot be empty");
    return_val = false;
  }

  // Email validations
  var email = document.forms["my_form"]["femail"].value;

  if (email.length > 30) {
    set_error("inp-2", "*Enter a valid email address");
    return_val = false;
  }

  if (email.length < 15) {
    set_error("inp-2", "*Email is too short");
    return_val = false;
  }

  if (email.length == 0) {
    set_error("inp-2", "*Email cannot be empty");
    return_val = false;
  }

  // DropDown validation
  var city = document.forms["my_form"]["fcity"].value;

  if (city === "") {
    set_error("dropdown", "*Please select a city");
    return_val = false;
  }

  // gender radio validation
  var gender = document.forms["my_form"]["fgender"].value;

  if (gender === "") {
    set_error("radio", "*Please select your gender");
    return_val = false;
  }

  // Password validation
  var pass = document.forms["my_form"]["fpassword"].value;

  if (pass.length < 4) {
    set_error("inp-4", "*Password length is more than 4 words");
    return_val = false;
  }

  if (pass.length > 20) {
    set_error("inp-4", "*Password length is not more than 20 words");
    return_val = false;
  }

  if (pass.length == 0) {
    set_error("inp-4", "*Password cannot be empty");
    return_val = false;
  }

  // terms and conditions validation
  var term = document.forms["my_form"]["fterms"];
  if (term.checked == false) {
    set_error("terms", "*Your are not agreed with the terms and conditions");
    return_val = false;
  }

  return return_val;
}

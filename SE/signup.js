function checkInput() {
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  var confirmpassword = document.getElementById('confirmpassword');
  var dob = document.getElementById('dob');
  var male = document.getElementById('male');
  var female = document.getElementById('female');
  var agreement = document.getElementById('agreement');

  if (username.value == '' || username.value.length < 5) {
    alert("Username cannot be empty and must be at least 5 characters long!");
  } 
  else if (password.value == '' || !checkAlphaNum(password.value)) {
    alert("Password cannot be empty and must be alphanumeric!");
  } 
  else if (confirmpassword.value != password.value) {
    alert("Confirm Password is not the same as the password!");
  } 
  else if (dob.value == '') {
    alert("Date of Birth is required!");
  } 
  else if(!male.checked && !female.checked){
    alert("Gender must be selected!")
  }
  else if(!agreement.checked){
    alert("User must accept terms and condition!")
  }
  else {
    if (!calculateAge()) {
      alert("You must be at least 18 years old to sign up.");
      return;
    }

    alert("Registration Success");
    window.location.href = "signin.html";
  }
}

function checkAlphaNum(password) {
  var isNum = false;
  var isAlpha = false;

  for (var i = 0; i < password.length; i++) {
    if (isNaN(password[i])) {
      isAlpha = true;
    } else {
      isNum = true;
    }
    if (isAlpha && isNum) {
      return true;
    }
  }
  return false;
}

function calculateAge() {
  var dob = document.getElementById('dob').value;
  var dobDate = new Date(dob);
  var today = new Date();

  var age = today.getFullYear() - dobDate.getFullYear();
  var monthDiff = today.getMonth() - dobDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
    age--;
  }

  if (age < 18) {
    return false;
  }

  return true;
}

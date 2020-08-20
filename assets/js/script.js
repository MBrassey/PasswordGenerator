// User Preferences Object
var preferencesObj = {
  length: 8, // Integer Between [8-128]
  case: true, // true [UPPERCASE], false [lowercase]
  numeric: true, // true [On], false [Off]
  special: true, // true [On], false [Off]
  reset: function () {
      (this.length = 8), (this.case = true), (this.numeric = true), (this.special = true);
  },
};

// Set newPassword's Preferences
function userPreferences() {
  var passwordLength = "";

  // Validate user input
  while (passwordLength === "" || passwordLength === null) {
      var passwordLength = prompt("How long should the password be?");
      console.log(passwordLength);
      if (passwordLength >= 8 && passwordLength <= 128) { // Ensure length is within range
          preferencesObj.length = passwordLength;
          console.log(preferencesObj.length);
          return preferencesObj.length;
      } else {
          window.alert("Enter a length between 8 - 128!");
      }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  userPreferences();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Randomize the string using Math.random
function generatePassword(length = preferencesObj.length) {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "!\"#$%&'()*+,-./:;<=>?@^[\\]^_`{|}~";
  var all = uppercase + lowercase + numbers + symbols;
  var password = "";
  for (var index = 0; index < length; index++) {
      var character = Math.floor(Math.random() * all.length);
      password += all.substring(character, character + 1);
  }
  console.log(password);
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

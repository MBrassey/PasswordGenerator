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

// Set Char Type Preferences
function userPreferences() {
  console.log("[ Welcome, Gathering User Preferences... ]");
  var passwordLength = "";
  var passwordCaseL = "";
  var passwordCaseU = "";
  var passwordNumber = "";
  var passwordSpecial = "";
  var chosen = "";

  // Validate Length Input
  while (passwordLength === "") {
      var passwordLength = prompt("How long should the password be?");

      // Ensure Length Is Within Range
      if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
          console.log(": Password Length: " + passwordLength);

          // Collect Case, Number & Special Character Preferences
          while (chosen === "") {
              var passwordCaseL = confirm("Include Lowercase Letters? [Ok] Yes, [Cancel] No");
              console.log(": Include Lowercase Letters: " + passwordCaseL);
              var passwordCaseU = confirm("Include Uppercase Letters? [Ok] Yes, [Cancel] No");
              console.log(": Include Upercase Letters: " + passwordCaseU);
              var passwordNumber = confirm("Include Numbers? [Ok] Yes, [Cancel] No");
              console.log(": Include Numbers: " + passwordNumber);
              var passwordSpecial = confirm("Include Special Characters? [Ok] Yes, [Cancel] No");
              console.log(": Include Special Characters: " + passwordSpecial);
              if (!passwordCaseL && !passwordCaseU && !passwordNumber && !passwordSpecial) {
                  console.log("Warning: Please include at least one char type!");
                  alert("Please include at least one option.");
                  var chosen = "";
              } else {
                  var chosen = 1;
              }
          }

          // Assign & return Variables
          preferencesObj.length = passwordLength;
          preferencesObj.caseL = passwordCaseL;
          preferencesObj.caseU = passwordCaseU;
          preferencesObj.number = passwordNumber;
          preferencesObj.special = passwordSpecial;
          return [preferencesObj.length, preferencesObj.caseL, preferencesObj.caseU, preferencesObj.number, preferencesObj.special];
      } else {
          var passwordLength = "";
          console.log("Warning: Enter a numeric length between 8 - 128!");
          window.alert("Enter a numeric length between 8 - 128!");
      }
  }
}

// Get References To the #generate Element
var generateBtn = document.querySelector("#generate");

// Write Password To The #password Input
function writePassword() {
  userPreferences();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Randomize The String Using Math.random
function generatePassword(length = preferencesObj.length) {

  // Define Char Types
  if (preferencesObj.caseL) {
      var lowercase = "abcdefghijklmnopqrstuvwxyz";
  } else {
      var lowercase = "";
  }
  if (preferencesObj.caseU) {
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
      var uppercase = "";
  }
  if (preferencesObj.number) {
      var numbers = "0123456789";
  } else {
      var numbers = "";
  }
  if (preferencesObj.special) {
      var special = "!\"#$%&'()*+,-./:;<=>?@^[\\]^_`{|}~";
  } else {
      var special = "";
  }

  // Define Char Type Combination
  var all = uppercase + lowercase + numbers + special;
  var password = "";

  // Process The Password
  for (var index = 0; index < length; index++) {
      var character = Math.floor(Math.random() * all.length);
      password += all.substring(character, character + 1);
  }
  console.log("Password: " + password);

  // Return The Final Password!
  return password;
}

// Add Event Listener To Generate Button
generateBtn.addEventListener("click", writePassword);

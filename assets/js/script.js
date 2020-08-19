// Set newPassword's Preferences
function userPreferences() {
  confirm("Welcome to Password Generator.");
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Randomize the string using Math.random
function generatePassword(length = 12) {
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

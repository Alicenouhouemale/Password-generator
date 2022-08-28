// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userInput = window.prompt("How long do you want your password to be?")

  var passwordLength = parseInt(userInput)
  if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password lenght must be between 8 and 128 characters")
    return
  }

  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase in your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase in your password?")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
    
  while (true) {

    var userInput = window.prompt("How long do you want your password to be?")
    //user exited prompt
    if (userInput === null) {
      return
    }
    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
      window.alert("That's not a number!")
    }else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Invalid password length. Length should be between 8 and 128 characters.")
    }else {
      break
    }

  }

  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase in your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase in your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  var optionCart = []
  
  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userWantsNumbers === true) {
    optionCart.push(numberList)
  }

  if (userWantsSymbols === true) {
    optionCart.push(symbolsList)
  }

  if (userWantsLowercase === true) {
    optionCart.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
    optionCart.push(uppercaseList)
  }
  if (optionCart.length === 0)
  optionCart.push(lowercaseList)

  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionCart)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  }
  
  return generatePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
  // if (password) return

  // if (password) {
  // passwordText.value = password;
  // }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

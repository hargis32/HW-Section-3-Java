// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Generator Functions

// Generate random lower case letter
function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Generate random upper case letter
function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Generate random number 0-9
function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Generate random symbol from own defined set
function getRandomSymbol () {
  const symbols = "!@#$%^&*()[]{}=+,./";
  return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(getRandomSymbol());



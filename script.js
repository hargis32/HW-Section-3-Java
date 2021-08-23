// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseText = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseText = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numText = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialText = ["!","@","#","$", "^", "&", "*", "(", ")", "=", "+"]





// Write password to the #password input
function generatePassword() {
  var passwordArray = []
  var passwordText = []
  var passwordLength = prompt("How many characters would you like? Password must be between 8-128 characters");
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8) {
    alert("Password must be at least 8 characters");
    passwordLength = prompt("How many characters would you like? Password must be between 8-128 characters");
  }

  if (passwordLength > 128) {
    alert("Password cannot exceed 128 characters");
    passwordLength = prompt("How many characters would you like? Password must be between 8-128 characters");
  }

  var lowerCaseConfirm = confirm("Would you like to include lowercase characters?");

  if (lowerCaseConfirm) {
    passwordText = passwordText.concat(lowercaseText);
  }

  var uppercaseConfirm = confirm("Would you like to include uppercase characters?");

  if (uppercaseConfirm) {
    passwordText = passwordText.concat(uppercaseText);
  }

  var numConfirm = confirm("Would you like to include numbers?");

  if (numConfirm) {
    passwordText = passwordText.concat(numText);
  }

  var specialConfirm = confirm("Would you like to include any special characters?");

  if (specialConfirm) {
    passwordText = passwordText.concat(specialText);
  }
  
  for (var i = 0; i < passwordLength; i++) {
    passwordArray.push (passwordText[Math.floor(Math.random() * passwordText.length)])
  }
  return passwordArray.join("");
}
  function applyPassword () {
    var password = generatePassword();
    var passwordTextArea = document.getElementById("password");
    
    passwordTextArea.value = password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", applyPassword);





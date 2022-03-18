// Assignment Code
var passwordGenerator = function() {
 
    var passwordLength = prompt("Length of the password?","put number between 8-128");

    while (passwordLength <8 || passwordLength > 128) {
        passwordLength=prompt("invalid.enter again");
    };

    var includeLowercase = confirm ("lower case?");
    var includeUppercase = confirm ("uppercase?");
    var includeNumbers = confirm ("numbers?");
    var includeSpecial = confirm ("special characters?");

    while (includeLowercase!=true && includeUppercase != true && includeNumbers != true && includeSpecial != true) {
        alert ("at least one");
        includeLowercase = confirm ("lower case?");
        includeUppercase = confirm ("uppercase?");
        includeNumbers = confirm ("numbers?");
        includeSpecial = confirm ("special characters?");
    }
}

var generateBtn=document.getElementById("generate");
generateBtn.addEventListener("click", passwordGenerator)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

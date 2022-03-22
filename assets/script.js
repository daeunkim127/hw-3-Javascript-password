// Assignment Code
function generatePassword() {
    var passwordLength=0;
    passwordLength = prompt("Length of the password?","put number between 8-128");

    while (passwordLength <8 || passwordLength > 128 || isNaN(passwordLength)==true) {
        passwordLength=prompt("invalid.enter again");
        };
     
    var includeLowercase=false;
    var includeUppercase=false;
    var includeNumbers=false;
    var includeSpecial=false;

    includeLowercase = confirm ("lower case?");
    includeUppercase = confirm ("uppercase?");
    includeNumbers = confirm ("numbers?");
    includeSpecial = confirm ("special characters?");

    while (includeLowercase!=true && includeUppercase != true && includeNumbers != true && includeSpecial != true) {
        alert ("at least one");
        includeLowercase = confirm ("lower case?");
        includeUppercase = confirm ("uppercase?");
        includeNumbers = confirm ("numbers?");
        includeSpecial = confirm ("special characters?");
    }

    var allowed={
        lowercase: "qwertyuiopasdfghjklzxcvbnm",
        uppercase : "QWERTYUIOPASDFGHJKLZXCVBNM",
        numbers : "1234567890",
        specials : "!@#$%^&*()_=+[],.<>/?"
    }

    input = [];
    password= "";

    if (includeLowercase) {input.push(allowed.lowercase)};
    if (includeUppercase) {input.push(allowed.uppercase)};
    if (includeNumbers) {input.push(allowed.numbers)};
    if (includeSpecial) {input.push(allowed.specials)};
    
    input = input.join("").split("");

    for(var i = 0; i< passwordLength; i++) {
        var index = (Math.floor(Math.random() * input.length));
        password = password+input[index]
    }
    return password
}
  

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    console.log(password);
    passwordText.textContent = password;
}



// Add event listener to generate button
var generateBtn=document.getElementById("generate");
generateBtn.addEventListener("click", generatePassword);

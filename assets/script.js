// Assignment Code


function generatePassword() {
    //passwordLength will give how long the user wants for a password
    var passwordLength=0;
    passwordLength = prompt("Length of the password?","put number between 8-128");

    //repeat until user put valid number
    while (passwordLength <8 || passwordLength > 128 || isNaN(passwordLength)==true) {
        passwordLength=prompt("invalid.enter again");
        };

    //Asking if user wants rest of the criteria
    var includeLowercase=false;
    var includeUppercase=false;
    var includeNumbers=false;
    var includeSpecial=false;

    includeLowercase = confirm ("lower case?");
    includeUppercase = confirm ("uppercase?");
    includeNumbers = confirm ("numbers?");
    includeSpecial = confirm ("special characters?");
    
    //repeat until user selects at least one 
    while (includeLowercase!=true && includeUppercase != true && includeNumbers != true && includeSpecial != true) {
        alert ("at least one");
        includeLowercase = confirm ("lower case?");
        includeUppercase = confirm ("uppercase?");
        includeNumbers = confirm ("numbers?");
        includeSpecial = confirm ("special characters?");
    }

    //allowed strings for criteria
    var allowed={
        lowercase: "qwertyuiopasdfghjklzxcvbnm",
        uppercase : "QWERTYUIOPASDFGHJKLZXCVBNM",
        numbers : "1234567890",
        specials : "!@#$%^&*()_=+[],.<>/?"
    }

    var input = [];
    var password= "";
    //adding allowed character into input array according to user's selection
    if (includeLowercase) {input.push(allowed.lowercase)};
    if (includeUppercase) {input.push(allowed.uppercase)};
    if (includeNumbers) {input.push(allowed.numbers)};
    if (includeSpecial) {input.push(allowed.specials)};
    
    //making input array into string and split into strings with one character
    input = input.join("").split("");
    
    //generating random password
    for(var i = 0; i< passwordLength; i++) {
        var index = Math.floor(Math.random() * input.length);
        password = password+input[index]
    }
    
    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    console.log(password);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}



// Add event listener to generate button
var generateBtn=document.getElementById("generate");
generateBtn.addEventListener("click", writePassword);

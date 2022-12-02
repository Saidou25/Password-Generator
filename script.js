// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Please choose a number between 8 and 128 for the length of your password.")
  var length = parseInt(prompt("Please choose a number between 8 and 128 for the length of your password."));
  
  if (!length || length < 8 || length > 128) {
alert("Your number has to be berween 8 and 9. Please try again.")
    generatePassword();
    return "";
   } 

  var isUppercase = confirm("Would you like to use uppercase ?");
  var isLowercase = confirm("Would you like to use lowercase ?");
  var isSpecial = confirm("Would you like to use special chatacter ?");
  var isNumber = confirm("Would you like to use numbers ?");


  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var special = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  if (isUppercase) {
    //use uppercase letters
    console.log("uppercase");
  
  }
  
  if (isLowercase) {
    //use lowercase letters
    console.log("lowercase");
  
  }
  
  if (isSpecial) {
    //use special characters
    console.log("special");
  
  }
  if (isNumber) {
    //use numbers
    console.log("number");

    var randomstring = "";
createrandomstring(length)
function createrandomstring(stringlength) {
  var possCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  for (var i, i = 0; i < stringlength; i++) {
    randomstring += possCharacters.charAt(Math.floor(Math.random() * possCharacters.length))
  }
}
 }
 alert(randomstring);
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

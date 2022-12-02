// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Please choose a number between 8 and 128 for the length of your password.")
  var length = parseInt(prompt("Please choose a number between 8 and 128 for the length of your password."));
  
  if (!length || length < 8 || length > 128) {
alert("Your number has to be berween 8 and 128. Please try again.")
    generatePassword();
    return "";
   } 

  var isUppercase = confirm("Would you like to use uppercase ?");
  var isLowercase = confirm("Would you like to use lowercase ?");
  var isSpecial = confirm("Would you like to use special chatacter ?");
  var isNumber = confirm("Would you like to use numbers ?");
  var possCharacters = ""

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var special = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  if (isUppercase) {
    console.log("uppercase");
    possCharacters += uppercase;
  }
 
  if (isLowercase) {
    console.log("lowercase");
    possCharacters += lowercase;
  }

  if (isSpecial) {
    console.log("special");
    possCharacters += special;
  
  } 

  if (isNumber) {
    console.log("number");
    possCharacters += number;
  }

  if ( isLowercase || isUppercase || isSpecial || isNumber) {

  } else {
    alert("Please choose at least one type of character.");
    return "";
  }
  
console.log(possCharacters);

    var randomstring = "";
createrandomstring(length)
function createrandomstring(stringlength) {
  
  for (var i, i = 0; i < stringlength; i++) {
    randomstring += possCharacters.charAt(Math.floor(Math.random() * possCharacters.length))
 } 
}  alert(randomstring);
 }
 
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

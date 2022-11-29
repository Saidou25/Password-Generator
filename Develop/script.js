// Assignment code heref



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

   var isUppercase = confirm("Would you like to use uppercase ?");
   var isLowercase = confirm("Would you like to use lowercase ?");
   var isSpecial = confirm("Would you like to use special chatacter ?");
   var isNumber = confirm("Would you like to use numbers ?");

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
   }
  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

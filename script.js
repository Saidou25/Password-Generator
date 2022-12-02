// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Please choose a number between 8 and 128 for the length of your password.")
  var length = parseInt(prompt("Please choose a number between 8 and 128 for the length of your password."));
  //------------choosing the lengh of the password------------------
  if (!length || length < 8 || length > 128) {
alert("Your number has to be berween 8 and 128. Please try again.")
    generatePassword();
    return "";
   } 
//-----------------------------------------------------------------

//-------------------list of needed variables----------------------
  var isUppercase = confirm("Would you like to use uppercase ?");
  var isLowercase = confirm("Would you like to use lowercase ?");
  var isSpecial = confirm("Would you like to use special chatacter ?");
  var isNumber = confirm("Would you like to use numbers ?");
  var possCharacters = ""//this is the input from the user choosing his/her desired character types for the password
  var randomstring = "";//variable used to establish a random string for the password
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var special = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//------------------------------------------------------------------

//-------------------building up possCharacters by concatenating user's input
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
    console.log("Characters you choosed.", possCharacters);
  } else {
    alert("Please choose at least one type of character.");
    return "";
  }
//-----------------------------------------------

//-------------------genarating random password----------------

   createrandomstring(length)
   function createrandomstring(stringlength) {
  
   for (var i, i = 0; i < stringlength; i++) {
    randomstring += possCharacters.charAt(Math.floor(Math.random() * possCharacters.length))
 } 
}  alert(randomstring);

   //return ""; // avoids "undefined" message after delivery of the password
 }
 
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);

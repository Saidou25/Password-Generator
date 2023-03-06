// Get references to the #generate element
var generateBtn = document.getElementById("generate");

function generatePassword() {

  var length = parseInt(prompt("Please choose a number between 8 and 128 for the length of your password."));
  //------------choosing the lengh of the password------------------
  if (!length || length < 8 || length > 128) {
    alert("Your number has to be between 8 and 128. Please try again.")
    return "";
  }
  //-----------------------------------------------------------------

  //-------------------list of needed variables----------------------
  var isUppercase = confirm("Would you like to use uppercase ?");
  var isLowercase = confirm("Would you like to use lowercase ?");
  var isSpecial = confirm("Would you like to use special chatacters ?");
  var isNumber = confirm("Would you like to use numbers ?");
  var possCharacters = ""//this is the input from the user choosing his/her desired character types for the password
  var password = "";//variable password to establish a random string for the password
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var special = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  //------------------------------------------------------------------

  //-------------------building up possCharacters by concatenating user's input
  if (isUppercase) {

    possCharacters += uppercase;
  }

  if (isLowercase) {

    possCharacters += lowercase;
  }

  if (isSpecial) {

    possCharacters += special;

  }

  if (isNumber) {

    possCharacters += number;
  }

  if (isLowercase || isUppercase || isSpecial || isNumber) {

  } else {
    alert("Please choose at least one type of character. Please try again.");
    return "";
  }
  //-----------------------------------------------

  //-------------------genarating random password----------------

  createrandomstring(length);

  function createrandomstring(length) {

    for (var i = 0; i < length; i++) {
      password += possCharacters.charAt(Math.floor(Math.random() * possCharacters.length))
    }

    writePassword(password);
  }
};
//-------------------printing random password to the DOM----------------

function writePassword(password) {

  document.getElementById("password").innerHTML = password;

};

generateBtn.addEventListener("click", generatePassword);

// Assignment code heref

/*

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

*/

/*
  var isUppercase = confirm("Would you like to use uppercase ?");
   var isLowercase = confirm("Would you like to use lowercase ?");
   var isSpecial = confirm("Would you like to use special chatacter ?");
   var isNumber = confirm("Would you like to use numbers ?");
   
   
   var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var lowercase = "abcdefghijklmnopqrstuvwxyz";
   var number = "0123456789";
   var special = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

}

*/

/*
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
   var length = prompt("Choose the number of charecters you would like for the length of your password.");*/


 var length = prompt("choose a number");
  
   var randomstring = "";
   createrandomstring(length)
function createrandomstring(stringlength) {
  
  var posscharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  for(var i, i =0; i < stringlength; i++) {
    randomstring += posscharacters.charAt(Math.floor(Math.random() * posscharacters.length))
  
    }
}
  console.log(randomstring);


 

/*
   
   var length = prompt("Choose the number of charecters you would like for the length of your password.");
  if (length < 8) {
    console.log("must be between 8 and 128 characters.");
  } else if (length > 128) {
    console.log("must be between 8 and 128 characters.");
  } else {
    console.log("You choosed " + length + " characters for your password.");
  }  if (length = 0) {
    console.log("you must enter a number.")
  }

*/



 /* 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}

*/
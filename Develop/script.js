// Assignment code here
function generatePassword() {
  var characterPool = "";
  var lowerCase = "abcdefghijklmnopqrstupwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCase = "1234567890";
  var specialCase = " !”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";
  
  characterGenerator();

  //this function asks the user what characters to include in the password, if no characters are selected, the function repeats
  function characterGenerator() {
    if(window.confirm("Include lowercase letters?")){
      characterPool += lowerCase;
    }
  
    if(window.confirm("Include uppercase letters?")){
      characterPool += upperCase;
    }

    if(window.confirm("Include numbers?")){
      characterPool += numberCase;
    }

    if(window.confirm("Include special characters?")){
      characterPool += specialCase;
    }

    if(characterPool === ""){
      window.alert("You did not select any character types! please try again")
      characterGenerator();
    }
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

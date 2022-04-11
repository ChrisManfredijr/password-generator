// Assignment code here
function generatePassword() {
  var characterPool = "";
  var lowerCase = "abcdefghijklmnopqrstupwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCase = "1234567890";
  var specialCase = " !”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";
  var passLength = "";
  var passwordFinal = "";

  characterGenerator();
  passwordLength();
  passwordRandomizer();


  //this function asks the user what characters to include in the password, if no characters are selected, the function repeats. 
  function characterGenerator() {

    //each if statement concatinates the the character type to character pool if selected
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

    //the characterPool variable is the sum of all character types selected by the user, if no character types are selected and the string is empty, the function will repeat
    if(characterPool === ""){
      window.alert("You did not select any character types! please try again")
      characterGenerator();
    }
  }

  //this function asks the user to enter a password length within paramaters, if they don't enter a correct value, the function repeats
  function passwordLength() {

    passLength = window.prompt("Please enter a password length between 8 and 128 characters");
    if(passLength < 8 || passLength > 128){
      passwordLength();
    }
  }
  
  //takes the defined character pool and randomizes it
  function passwordRandomizer() {
    for(let i = 0; i <= passLength; i++){
      passwordFinal += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
    }
  }
  return passwordFinal;
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

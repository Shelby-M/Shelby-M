var generateBtn = document.querySelector("#generate");

var passwordLength
var abc = "abcdefghijklmnopqrstuvwxyz";
var ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var special = "!#$%&*+-=?@^_~"

const generatePassword = function(){
    var passwordLength = parseInt(window.prompt("Please choose a password length between 8 and 128 characters:"));
while (passwordLength  < 8 || passwordLength > 128){
    alert("Please follow instructions!");
    passwordLength = parseInt(window.prompt("Please choose a password length between 8 and 128 characters"));
}

var lowerCase = window.confirm("Would you like your password to have lowercase letters?");

var upperCase = window.confirm("Would you like your password to have uppercase letters?");

var numbers = window.confirm("Would you like your password to have numbers?");

var specialCharacters = window.confirm("Would you like your password tyo have special characters?");


var pw=''
if (lowerCase===true){
pw+=abc
}

if (upperCase===true){
    pw+=ABC
}
if (numbers===true){
    pw+=num
}

if (specialCharacters===true){
    pw+=special
}

var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += pw.charAt(Math.floor(Math.random() * pw.length));
}
return password;

}

function writePassword() {
   

var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
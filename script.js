const passwordBox = document.getElementById("password")
const generatePassword = document.querySelector("button")
const copypass = document.getElementsByClassName(".copy")
const length = 12

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*()_+~|}{[]><?-="
const allchars = uppercase + lowercase + number + symbol



const password = uppercase[Math.floor(Math.random() * uppercase.length)]
console.log(password)

function createPassword(){
  let password = ""
  password += uppercase[Math.floor(Math.random() * uppercase.length)]
  password += lowercase[Math.floor(Math.random() * lowercase.length)]
  password += number[Math.floor(Math.random() * number.length)]
  password += symbol[Math.floor(Math.random() * symbol.length)]

  while(length > password.length){
    password += allchars[Math.floor(Math.random() * allchars.length)]
  }
  passwordBox.value = password
}

function copyPassword(){
  passwordBox.Select();
  document.execCommand("copy")
}


function copyPassword(){
  passwordBox.select(); // Select the text
  document.execCommand("copy"); // Copy the selected text to the clipboard
}


generatePassword.addEventListener("click", createPassword);
copypass.addEventListener("click", copyPassword)

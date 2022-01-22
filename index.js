const upperBox = document.getElementById("uppercase__chkbox");
const lowerBox = document.getElementById("lowercase__chkbox");
const numberBox = document.getElementById("number__chkbox");
const symbolBox = document.getElementById("symbol__chkbox");
const passwordBox = document.getElementById("password");

let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = "!@#$%^&*()";
let numbers = "0132456879";
let passwordLength = 10;
let chars = "";
let pass = "";
const generatePassword = () => {
  //   alert(1);
  upperBox.checked === true ? (chars += alphabets) : chars;
  lowerBox.checked === true ? (chars += alphabets.toLowerCase()) : chars;
  numberBox.checked === true ? (chars += numbers) : chars;
  symbolBox.checked === true ? (chars += symbols) : chars;
  chars == "" ? alert("please select one from above options") : null;
  passwordBox.value = generate(chars);
};
const resetPassword = () => {
  passwordBox.value = null;
  upperBox.checked = false;
  lowerBox.checked = false;
  numberBox.checked = false;
  symbolBox.checked = false;
};
const generate = (chars) => {
  for (let i = 0; i <= passwordLength; i++) {
    let randomPass = Math.floor(Math.random() * chars.length);
    pass += chars.substring(randomPass, randomPass + 1);
  }
  return pass;
};

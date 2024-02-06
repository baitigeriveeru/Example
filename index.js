const PasswordBox = document.getElementById("password");
const length = 12;

const UpperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = "~!@#$%^&*(?[]{}_+=-";

const AllCharS = UpperCaseLetters + LowerCaseLetters + Numbers + Symbols;

function CreateRandomPassword() {
  let Password = "";
  Password +=
    UpperCaseLetters[Math.floor(Math.random() * UpperCaseLetters.length)];
  Password +=
    LowerCaseLetters[Math.floor(Math.random() * LowerCaseLetters.length)];
  Password += Numbers[Math.floor(Math.random() * Numbers.length)];
  Password += Symbols[Math.floor(Math.random() * Symbols.length)];

  while (length >= Password.length) {
    Password += AllCharS[Math.floor(Math.random() * AllCharS.length)];
  }

  PasswordBox.value = Password;
  console.log(Password);
}

function CopyPassword() {
  PasswordBox.select();
  document.execCommand("copy");
}

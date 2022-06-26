const body = document.querySelector("body");
const input = document.querySelector("#pal");
const checkBtn = document.querySelector(".checkBtn");
const result = document.querySelector(".result");

const cls = ["isPalindrome", "isNotPalindrome", "defaultBackground"];

checkBtn.addEventListener("click", () => {
  let value = input.value;
  body.classList.remove(...cls);
  if (value) {
    let answer = isPalindrome(value);
    if (answer === true) {
      result.textContent = ` ${value.toUpperCase()} is indeed a palindrome!`;
      body.classList.add("isPalindrome");
    } else {
      result.textContent = `${value.toUpperCase()} is not a palindrome!`;
      body.classList.add("isNotPalindrome");
    }
  } else {
    result.textContent = "Please put a value into the input field";
    body.classList.add("defaultBackground");
  }
  input.value = "";
  answer = "";
});

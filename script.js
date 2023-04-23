const btn = document.getElementById("button");
const mainBody = document.getElementById("mainBody");
const colorText = document.getElementById("colorText");

function randomColor() {
  let randomNumber = Math.floor(Math.random() * 1000000);
  mainBody.style.backgroundColor = `#${randomNumber}`;
  btn.style.backgroundColor = `#${randomNumber + 272832}`;
  colorText.innerHTML = `#${randomNumber}`;
}

btn.addEventListener("click", randomColor);

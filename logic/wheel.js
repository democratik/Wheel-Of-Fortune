const refs = {
  wheel: document.querySelector(".wheel"),
  message: document.querySelector(".massage-on-wheel")
};

// текст на колесі зникає при натисканні
function textOnWheel() {
  refs.message.style.display = "none";
}
refs.wheel.addEventListener("click", textOnWheel);





let currentTheme = localStorage.getItem("theme");

if (currentTheme === null) {
  localStorage.setItem("theme", "light");
}

const refsForTheme = {
  theme: document.querySelector(".theme-button"),
  title: document.querySelector(".title"),
  buttons: document.querySelector(".buttons"),
};

if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
  refsForTheme.title.classList.add("dark-theme-title");
}

function changeTheme() {
  currentTheme = localStorage.getItem("theme");

  if (currentTheme === "light") {
    document.body.style.backgroundColor = "rgb(32, 32, 32)";
    refsForTheme.title.style.color = "white";
    refsForTheme.buttons.classList.add("dark-theme-button");
    localStorage.setItem("theme", "dark");
  } else if (currentTheme === "dark") {
    document.body.style.backgroundColor = "orange";
    refsForTheme.title.style.color = "black";
    localStorage.setItem("theme", "light");
  }
}

refsForTheme.theme.addEventListener("click", changeTheme);

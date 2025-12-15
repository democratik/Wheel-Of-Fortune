const refsForTheme = {
    light: document.querySelector(".light-mode"),
    dark: document.querySelector(".dark-mode"),
    backColor: document.querySelector("body")
}

function changeThemeOnDark() {
    refsForTheme.backColor.style.backgroundColor = "rgb(56, 56, 56)";
}

function changeThemeOnLight() {
    refsForTheme.backColor.style.backgroundColor = "orange";
}

refsForTheme.dark.addEventListener("click", changeThemeOnDark);
refsForTheme.light.addEventListener("click", changeThemeOnLight);




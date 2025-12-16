let currentTheme = localStorage.getItem("theme");

if (currentTheme === null) {
    currentTheme = "light";
}

const refsForTheme = {
    theme: document.querySelector(".theme-button"),
    backColor: document.querySelector("body"),
    title: document.querySelector(".title")
}

function changeTheme() {
    currentTheme = localStorage.getItem("theme")

    if (currentTheme === "light") {
        refsForTheme.backColor.style.backgroundColor = "rgb(32, 32, 32)";
        refsForTheme.title.style.color = "white"
        localStorage.setItem("theme", "dark")
    }else if(currentTheme === "dark"){
        refsForTheme.backColor.style.backgroundColor = "orange"
        refsForTheme.title.style.color = "black"
        localStorage.setItem("theme", "light")
    }
}


refsForTheme.theme.addEventListener("click", changeTheme);




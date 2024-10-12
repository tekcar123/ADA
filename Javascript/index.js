function darkTheme() {
    var page = document.getElementsByTagName('html')[0]
    page.classList.remove("light");
    page.classList.add("dark");
    currentTheme = "dark";
}

function lightTheme() {
    var page = document.getElementsByTagName('html')[0]
    page.classList.remove("dark");
    page.classList.add("light");
    currentTheme = "light";
}

function changeTheme() {
    if (currentTheme == "light") {
        darkTheme()
    }
    else {
        lightTheme()
    }

}

//determines if the user has a set theme
function detectColorScheme() {
    var theme = "light";    //default to light

    //local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") == "dark") {
            var theme = "dark";
        }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        var theme = "dark";
    }

    //dark theme preferred, set document with a `data-theme` attribute
    if (theme == "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }
    return theme
}

var currentTheme = "light";
if (detectColorScheme() == "dark") {
    darkTheme()
    currentTheme = "dark"
}
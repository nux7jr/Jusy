// theme

var btn = document.getElementById("bnt-change-theme")
var link = document.getElementById("theme-link");


btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "/dist/style/blocks/lite-theme.css";
    let darkTheme = "/dist/style/blocks/dark-theme.css";
    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}

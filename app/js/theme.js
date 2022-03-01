const theme = () => {
  var btn = document.getElementById("bnt-change-theme");
  var link = document.getElementById("theme-link");

  btn.addEventListener("click", function () {
    ChangeTheme();
  });

  function ChangeTheme() {
    const lightTheme = "/dist/style/blocks/lite-theme.css";
    const darkTheme = "/dist/style/blocks/dark-theme.css";
    let currTheme = link.getAttribute("href");
    let theme = "";

    if (currTheme == lightTheme) {
      currTheme = darkTheme;
      theme = "dark";
    } else {
      currTheme = lightTheme;
      theme = "light";
    }

    link.setAttribute("href", currTheme);

  }
};
export default theme

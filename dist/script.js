console.log("done");

const theme = () => {
  const btn = document.getElementById("bnt-change-theme");
  const link = document.getElementById("theme-link");

  btn.addEventListener("click", function () {
    changeTheme();
  });

  function changeTheme() {
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
theme();

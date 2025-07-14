const themeBtn = document.getElementById("theme-btn");
let lightTheme = document.body.classList.contains("light");
themeBtn.addEventListener(
  "click",
  (toggleTheme = () => {
    if (lightTheme) {
      themeBtn.innerText = "🌙";
      document.body.classList.replace("light", "dark");
      lightTheme = false;
    } else {
      themeBtn.innerText = "☀️";
      document.body.classList.replace("dark", "light");
      lightTheme = true;
    }
    localStorage.setItem("Light Theme", `${lightTheme}`);
  })
);

(function currentStatus() {
  // Theme
  if (localStorage.getItem("Light Theme") === "true") {
    themeBtn.innerText = "☀️";
    document.body.classList.replace("dark", "light");
    lightTheme = true;
  } else if (localStorage.getItem("Light Theme") === "false") {
    themeBtn.innerText = "🌙";
    document.body.classList.replace("light", "dark");
    lightTheme = false;
  }
  // Date
  document.getElementById("date").innerText = new Date().toLocaleDateString();
})();

const displayInput = document.getElementById("display-input");
const buttons = document.querySelectorAll("button.row");
let result = "";
const buttonAction = (e) => {
  const targetText = e.target.textContent;

  switch (true) {
    // case displayInput.value === "":
    //     return;

    case targetText === "=":
      result = displayInput.value = eval(displayInput.value);
      displayInput.value = result;
      break;
    case targetText === "َAC":
      result = "";
      displayInput.value = result;
      break;

    case targetText === "DEL":
      result = displayInput.value = eval(displayInput.value);
      displayInput.value = result;
      break;

    default:
      result += targetText;
      displayInput.value = result;
      break;
  }
};

buttons.forEach((button) => { button.addEventListener("click", buttonAction)});

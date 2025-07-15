const themeBtn = document.getElementById("theme-btn");
let lightTheme = document.body.classList.contains("light");
const toggleTheme = () => {
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
};
themeBtn.addEventListener("click", toggleTheme);

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

// Calculator Elements Select & Variable
const displayInput = document.getElementById("display-input");
const buttons = document.querySelectorAll("button.row");
let operatorAddToInput = ["+", "-", "*", "/"];
let result = "";

// Read Last Result From Local Storge
if (localStorage.getItem("lastResult")) {
  displayInput.value = localStorage.getItem("lastResult");
}

const buttonAction = (e) => {
  const targetText = e.target.textContent;
  switch (true) {
    // Theme Button
    case targetText === "☀️" || targetText === "🌙":
      return;

    // Calculator Buttons & Action
    case displayInput.value === "" && targetText === "=":
      return;

    case targetText === "=":

      result = displayInput.value = eval(displayInput.value);
      displayInput.value = result;
      localStorage.setItem("lastResult", result);
      break;

    case targetText === "AC":
      result = "";
      displayInput.value = result;
      localStorage.setItem("lastResult", result);
      break;

    case targetText === "DEL":
      result = result.toString().slice(0, -1);
      displayInput.value = result;
      localStorage.setItem("lastResult", result);
      break;

    case targetText === "%":
      
      for (let i = 0; i < operatorAddToInput.length; i++) {
        if (result.toString().includes(operatorAddToInput[i])) {
          return;
        }
      }
      result /= 100;
      displayInput.value = result;
      localStorage.setItem("lastResult", result);
      break;

    default:
      result += targetText;
      displayInput.value = result;
      localStorage.setItem("lastResult", result);
      break;
  }
};
buttons.forEach((button) => {
  button.addEventListener("click", buttonAction);
});

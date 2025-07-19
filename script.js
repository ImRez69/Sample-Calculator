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
const validInput = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","+","-","*","/"];
let operatorAddToInput = { "+": 0, "-": 0, "*": 0, "/": 0 };
const operatorKeys = Object.keys(operatorAddToInput);
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
      operatorKeys.forEach((operator) => (operatorAddToInput[operator] = 0));
      
      function checkEntry(entry){
        const entryArray = entry.split("")
        const entryExisted = entryArray.map((entryLetter)=>validInput.includes(entryLetter));

        if (entryExisted.includes(false)) {
          console.log("entryExisted Have False Item");
          return;
        } else {
          console.log(entry);
          result = eval(entry);
          displayInput.value = result;
          localStorage.setItem("lastResult", result);
        }
      }
      checkEntry(displayInput.value)
      break;

    case targetText === "AC":
      operatorKeys.forEach((operator) => (operatorAddToInput[operator] = 0));
      result = "";
      displayInput.value = result;

      localStorage.setItem("lastResult", result);
      break;

    case targetText === "DEL":
      const lastChar = result.toString().slice(result.length - 1);
      if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "*" ||
        lastChar === "/"
      ) {
        operatorAddToInput[lastChar]--;
      }
      result = result.toString().slice(0, -1);
      displayInput.value = result;
      localStorage.setItem("lastResult", result);
      break;

    case targetText === "%":
      for (let i = 0; i < operatorKeys.length; i++) {
        if (result.toString().includes(operatorKeys[i])) {
          return;
        }
      }
      result /= 100;
      displayInput.value = result;
      localStorage.setItem("lastResult", result);
      break;

    case targetText === "+" ||
      targetText === "-" ||
      targetText === "*" ||
      targetText === "/":
      if (result === "") {
        return;
      }
      for (let i = 0; i < operatorKeys.length; i++) {
        if (operatorAddToInput[operatorKeys[i]]) {
          return;
        }
      }
      operatorAddToInput[targetText]++;
      result += targetText;
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

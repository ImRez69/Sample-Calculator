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
const validInput = [ "0" ,"1" ,"2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/", ];
let operatorAddToInput = { "+": 0, "-": 0, "*": 0, "/": 0 };
const operatorKeys = Object.keys(operatorAddToInput);
let lastCharOfValue = displayInput.value.toString().slice(displayInput.value.length - 1);
let result = "";
let dotUsed = 0;

// Empty Input Check Function
const emptyInput = (input) => input === "";

// Last Character is Operator Check Function
const lastCharOperatorCheck = (value) => {
  const lastCharOfValue = value.toString().slice(value.length - 1);
  if (operatorKeys.includes(lastCharOfValue)) {
    return true;
  }
};

const buttonAction = (e) => {
  const targetText = e.target.textContent;
  switch (true) {
    // Theme Button
    case targetText === "☀️" || targetText === "🌙":
      return;
      
    case targetText === "=":
      if (emptyInput(displayInput.value)) {
        return;
      }
      operatorKeys.forEach((operator) => (operatorAddToInput[operator] = 0));
      function checkEntry(entry) {
        const entryArray = entry.split("");
        if (operatorKeys.includes(entryArray[entryArray.length - 1])) {
          entryArray.pop();
          entry = entryArray.toString().replace(/,/g, "");
        }
        const entryExisted = entryArray.map((entryLetter) =>
          validInput.includes(entryLetter)
        );
        if (!entryExisted.includes(false)) {
          result = eval(entry);
          displayInput.value = result;
        } else {
          alert("Please Enter a Valid Charechter or Only Used Buttons");
          return;
        }
      }
      checkEntry(displayInput.value);
      break;

    case targetText === "AC":
      operatorKeys.forEach((operator) => (operatorAddToInput[operator] = 0));
      dotUsed = 0;
      result = "";
      displayInput.value = result;
      break;

    case targetText === "DEL":
      const lastChar = result.toString().slice(result.length - 1);
      if ( lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" ) {
        operatorAddToInput[lastChar]--;
      }
      result = result.toString().slice(0, -1);
      displayInput.value = result;
      break;

    case targetText === "%":
      if (emptyInput(displayInput.value)){
        return; 
      }
      for (let i = 0; i < operatorKeys.length; i++) {
        if (result.toString().includes(operatorKeys[i])) {
          return;
        }
      }
      result /= 100;
      displayInput.value = result;
      break;

    case targetText === ".":
      if (emptyInput(displayInput.value)) {
        return;
      }
      lastCharOfValue = displayInput.value.toString().slice(displayInput.value.length - 1);
      if ( lastCharOfValue !== "." && !operatorKeys.includes(lastCharOfValue) && dotUsed === 0 ) {
        dotUsed++;
        result += targetText;
        displayInput.value = result;
      } else {
        return;
      }
      break;

    case targetText === "+" || targetText === "-" || targetText === "*" || targetText === "/":
      lastCharOfValue = displayInput.value.toString().slice(displayInput.value.length - 1);
      if ( emptyInput(displayInput.value) || operatorKeys.includes(lastCharOfValue)){
        return;
      }
      dotUsed = 0;
      result += targetText;
      displayInput.value = result;
      break;

    default:
      if (!validInput.includes(targetText)) {
        return;
      }
      result += targetText;
      displayInput.value = result;
      break;
  }
};
buttons.forEach((button) => {
  button.addEventListener("click", buttonAction);
});

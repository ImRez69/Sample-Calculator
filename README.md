# Calculator

A simple and interactive Calculator web application built with HTML, CSS, and JavaScript. This application allows users to perform basic arithmetic operations, toggle between dark and light themes, and view the current date.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)

## About
Calculator is a single-page web application designed for performing basic arithmetic operations. It features a clean and responsive interface with a dark/light theme toggle, a readonly display for calculations, and a date display in the header. The project uses vanilla JavaScript for functionality, custom CSS for styling, and the PTSans font (loaded as Vazirmatn) for a modern look.

## Features
- **Arithmetic Operations**: Supports addition (+), subtraction (-), multiplication (*), division (/), and percentage (%).
- **Input Validation**: Prevents invalid inputs (e.g., multiple decimals, consecutive operators) and displays results accurately.
- **Clear and Delete**: "AC" button resets the calculator, and "DEL" removes the last character.
- **Theme Toggle**: Switch between dark and light themes, with preferences saved in local storage.
- **Date Display**: Shows the current date in the header.
- **Responsive Design**: Fixed 300px width, optimized for both desktop and mobile devices.
- **Visual Feedback**: Buttons have hover and click animations with shadows and scaling effects.
- **Favicon**: Custom favicon (`fav-icon.png`) for browser tab branding.

## Installation
To run the Calculator application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ImRez69/Calculator.git
   cd Calculator


Ensure the font and favicon files are included:The project uses the Vazirmatn.ttf font (as PTSans) in the Source/Font directory and a favicon (fav-icon.png) in the Source/Img directory. If these files are missing, replace the font reference in style.css with a fallback font like Arial or download the Vazirmatn font, and ensure the favicon is present.

Open the application:  

Open index.html in a web browser (e.g., Chrome, Firefox).  
No additional dependencies or build steps are required, as the project uses vanilla HTML, CSS, and JavaScript.  
Optionally, you can view a live demo (add link here, e.g., via GitHub Pages or htmlpreview.github.io).
- Also, you can run `index.html` [Here](https://htmlpreview.github.io/?https://github.com/ImRez69/Sample-Calculator/blob/main/index.html).



## Usage

Open the application in a web browser.
Perform Calculations: Click number buttons (0-9) and operators (+, -, *, /, %) to build an expression. Press "=" to see the result.
Clear or Delete: Use "AC" to reset the input or "DEL" to remove the last character.
Toggle Theme: Click the theme button (🌙 or ☀️) to switch between dark and light modes.
View Date: The current date is displayed in the header.
The input field is readonly to ensure calculations are entered via buttons only.

## Technologies

HTML5: For the structure, with a readonly input for display and semantic button layout.
CSS3: For styling, including responsive design, custom animations, and the PTSans font (Vazirmatn) for a modern look.
JavaScript (Vanilla): For calculation logic, input validation, theme toggling, and date display.
PTSans Font: A custom font (loaded as Vazirmatn.ttf) for a clean visual style.
Favicon: A custom favicon (fav-icon.png) for browser tab branding.

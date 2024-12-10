// Selecting the display element
const display = document.getElementById('display');

// Function to append characters to the display
function appendToDisplay(value) {
  if (display.innerText === '0') {
    display.innerText = value; // Replace '0' with input
  } else {
    display.innerText += value; // Append input to existing value
  }
}

// Function to clear the display
function clearDisplay() {
  display.innerText = '0';
}

// Function to delete the last character
function deleteLast() {
  if (display.innerText.length === 1) {
    display.innerText = '0';
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

// Function to calculate the result
function calculateResult() {
  try {
    display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
  } catch (error) {
    display.innerText = 'Error';
  }
}

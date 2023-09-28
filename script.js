function reverseString(inputString) {
  let reversed = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i];
  }
  return reversed;
}

const reverseButton = document.getElementById("reverseButton");
const inputText = document.getElementById("inputText");
const result = document.getElementById("result");

reverseButton.addEventListener("click", function () {
  const inputString = inputText.value;
  const reversedString = reverseString(inputString);
  result.textContent = `Reversed string: ${reversedString}`;
});

/* recolor */

const myColor = document.querySelector("#exampleColorInput");
const targetElement = document.body;

myColor.addEventListener("input", function () {
  const selectedColor = myColor.value;
  targetElement.style.backgroundColor = selectedColor;

  const contrastTextColor = getContrastColor(selectedColor);
  targetElement.style.color = contrastTextColor;
});

function getContrastColor(bgColor) {
  const r = parseInt(bgColor.slice(1, 3), 16);
  const g = parseInt(bgColor.slice(3, 5), 16);
  const b = parseInt(bgColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  if (brightness > 128) {
    return "#000000";
  } else {
    return "#FFFFFF";
  }
}

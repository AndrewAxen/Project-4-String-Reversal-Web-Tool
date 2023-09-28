const myColor = document.querySelector('#exampleColorInput');
const targetElement = document.body;
myColor.addEventListener('input', function () {
  const selectedColor = myColor.value;
  targetElement.style.backgroundColor = selectedColor;
});

function reverseString(inputString) {
  let reversed = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i];
  }
  return reversed;
}


const reverseButton = document.getElementById('reverseButton');
const inputText = document.getElementById('inputText');
const result = document.getElementById('result');

reverseButton.addEventListener('click', function () {
  const inputString = inputText.value;
  const reversedString = reverseString(inputString);
  result.textContent = `Reversed string: ${reversedString}`;
});

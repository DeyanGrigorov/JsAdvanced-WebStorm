function subtract () {
  let firstNum = Number(document.getElementById('firstNumber').value);
  let secondNum = Number(document.getElementById('secondNumber').value);
  const result = document.getElementById('result');
  result.innerHTML = (firstNum - secondNum).toString();
}
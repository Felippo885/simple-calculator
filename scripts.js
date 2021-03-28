const form = document.querySelector('form');
const displayResult = document.querySelector('.result');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const { number1, number2, operation } = form;

  const result = calculator(+number1.value, +number2.value, operation.value);

  showResult(result);
});

function calculator(numberOne, numberTwo, operation) {
  switch (operation) {
    case '+':
      return numberOne + numberTwo;

    case '-':
      return numberOne - numberTwo;
    
    case '*':
      return numberOne * numberTwo;

    case '/':
      return numberOne / numberTwo;
    
    default:
      return 'Operation not found!';
  }
}

function showResult(result) {
  displayResult.querySelector('span').innerText = result;
  displayResult.classList.remove('none');
}
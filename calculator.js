const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

function calculator(input) {
  const check_validity = checkInput(input);

  if (check_validity) {
    doCalculations(input);
  }
}
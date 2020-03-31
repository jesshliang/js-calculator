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

function checkInput(input) {
  const operators = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/', 'modulo', '%', 'exponents', '^'];

  if (input === null || input.num1 === null || input.num2 === null) {
    console.log('One or more input values are empty.');
    return false;
  } else if (!operators.includes(input.operation)) {
    console.log('Please input a valid operator.');
    return false;
  } else {
    return true;
  }

}

function doCalculations(input) {
  let result = 0;

  if (['add', '+'].includes(input.operation)) {
    result = input.num1 + input.num2;
  } else if (['subtract', '-'].includes(input.operation)) {
    result =  
  } else if (['multiply', '*'].includes(input.operation)) {
    
  } else if (['divide', '/'].includes(input.operation)) {
    
  }

  console.log(result);
}
const prompt = require('prompt');

const calculator = function(error, input) { 
  const convertedProblem = convertProblem(input);
  const check_validity = checkInput(convertedProblem);

  if (check_validity === true) {
    doCalculations(convertedProblem);
  }
};

// Converts the inputs to numbers.
const convertProblem = function(input) {
  input.num1 = Number(input.num1);
  input.num2 = Number(input.num2);

  return input;
};

// Checks that the inputs are valid.
const checkInput = function(input) {
  const operators = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/', 'modulo', '%', 'exponents', '^'];

  if (typeof input.num1 !== 'number' || typeof input.num2 !== 'number' || isNaN(input.num1) || isNaN(input.num2)) {
    console.log('One or more input values are invalid.');
    return false;
  } else if (!operators.includes(input.operation)) {
    console.log('Please input a valid operator.');
    return false;
  } else {
    return true;
  }

};

// Performs the calculations.
const doCalculations = function(input) {
  let result = 0;

  if (['add', '+'].includes(input.operation)) {
    result = input.num1 + input.num2;
  } else if (['subtract', '-'].includes(input.operation)) {
    result = input.num1 - input.num2;
  } else if (['multiply', '*'].includes(input.operation)) {
    result = input.num1 * input.num2;
  } else if (['divide', '/'].includes(input.operation)) {
    if (input.num2 != 0) {
      result = input.num1 / input.num2;
    } else {
      console.log('You cannot divide by 0.');
      return;
    } 
  }

  console.log( Math.round(result * 100) / 100);
};

console.log('Welcome to Jessica\'s calculator.');

let toCalculate = [
  {
    name: 'num1',
    description: 'Please enter the first number',
  },
  {
    name: 'num2',
    description: 'Please enter the second number',
  },
  {
    name: 'operation',
    description: 'Please enter an operation'
  }
]

prompt.start();
prompt.get(toCalculate, calculator);
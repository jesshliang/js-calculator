const prompt = require('prompt');

const calculator = function(error, input) { 
  const convertedProblem = convertProblem(input);
  const check_validity = checkInput(convertedProblem);

  if (check_validity === true) {
    doCalculations(convertedProblem);
  }
};

const convertProblem = function(input) {
  input.num1 = Number(input.num1);
  input.num2 = Number(input.num2);

  return input;
};

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


// const exampleAdditionA = {
//   num1: 3,
//   num2: 5,
//   operation: 'add',
// };

// const exampleAdditionB = {
//   num1: 3,
//   num2: 8.3,
//   operation: 'add',
// };

// const exampleAdditionC = {
//   num1: 100.2,
//   num2: 9.1,
//   operation: 'add',
// };

// const exampleSubA = {
//   num1: 3,
//   num2: 5,
//   operation: 'subtract',
// };

// const exampleSubB = {
//   num1: 3,
//   num2: 8.3,
//   operation: 'subtract',
// };

// const exampleSubC = {
//   num1: 100.2,
//   num2: 9.1,
//   operation: 'subtract',
// };

// const exampleMultA = {
//   num1: 3,
//   num2: 5,
//   operation: 'multiply',
// };

// const exampleMultB = {
//   num1: 3,
//   num2: 8.3,
//   operation: 'multiply',
// };

// const exampleMultC = {
//   num1: 100.2,
//   num2: 9.1,
//   operation: 'multiply',
// };

// const exampleDivA = {
//   num1: 3,
//   num2: 5,
//   operation: 'divide',
// };

// const exampleDivB = {
//   num1: 3,
//   num2: 8.3,
//   operation: 'divide',
// };

// const exampleDivC = {
//   num1: 100.2,
//   num2: 9.1,
//   operation: 'divide',
// };

// const exampleDivD = {
//   num1: 3,
//   num2: 0,
//   operation: 'divide',
// };

// const badError1 = {
//   num1: 'clown',
//   num2: 2,
//   operation: 'add'
// }

// const badError2 = {
//   num1: 2,
//   num2: 'clown',
//   operation: 'add'
// }

// const badError3 = {
//   num1: 3,
//   num2: 2,
//   operation: 'clown'
// }


// console.log('Addition with two integers')
// calculator(exampleAdditionA);

// console.log('Addition with 1 int, 1 float')
// calculator(exampleAdditionB);

// console.log('Addition with two floats')
// calculator(exampleAdditionC);


// console.log('Sub with two integers')
// calculator(exampleSubA);

// console.log('Sub with 1 int, 1 float')
// calculator(exampleSubB);

// console.log('Sub with two floats')
// calculator(exampleSubC);


// console.log('Mult with two integers')
// calculator(exampleMultA);

// console.log('Mult with 1 int, 1 float')
// calculator(exampleMultB);

// console.log('Mult with two floats')
// calculator(exampleMultC);


// console.log('Div with two integers')
// calculator(exampleDivA);

// console.log('Div with 1 int, 1 float')
// calculator(exampleDivB);

// console.log('Div with two floats')
// calculator(exampleDivC);

// console.log('Div with a 0')
// calculator(exampleDivD);

// console.log('\n EDGE \n')

// console.log('Edge: Bad input at num1')
// calculator(badError1);

// console.log('Edge: Bad input at num2')
// calculator(badError2);

// console.log('Edge: Bad input at oper')
// calculator(badError3);
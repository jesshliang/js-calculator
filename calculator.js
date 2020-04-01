const exampleAdditionA = {
  num1: 3,
  num2: 5,
  operation: 'add',
};

const exampleAdditionB = {
  num1: 3,
  num2: 8.3,
  operation: 'add',
};

const exampleAdditionC = {
  num1: 100.2,
  num2: 9.1,
  operation: 'add',
};

const exampleSubA = {
  num1: 3,
  num2: 5,
  operation: 'subtract',
};

const exampleSubB = {
  num1: 3,
  num2: 8.3,
  operation: 'subtract',
};

const exampleSubC = {
  num1: 100.2,
  num2: 9.1,
  operation: 'subtract',
};

const calculator = function(input) {
  const check_validity = checkInput(input);

  if (check_validity) {
    doCalculations(input);
  }
};

const checkInput = function(input) {
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
    } 
  }

  console.log( Math.round(result * 10) / 10);
};

console.log('Addition with two integers')
calculator(exampleAdditionA);

console.log('Addition with 1 int, 1 float')
calculator(exampleAdditionB);

console.log('Addition with two floats')
calculator(exampleAdditionC);


console.log('Sub with two integers')
calculator(exampleSubA);

console.log('Sub with 1 int, 1 float')
calculator(exampleSubB);

console.log('Sub with two floats')
calculator(exampleSubC);
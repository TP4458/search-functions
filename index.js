import inquirer from 'inquirer';

const array = Array(50000000)
  .fill(0)
  .map((_, index) => index);

function question() {
  inquirer
    .prompt([
      {
        name: 'list',
        type: 'list',
        message: 'Select the type of function to use for index search:',
        choices: [
          'Binary search, iterative',
          'Binary search, recursive',
          'Linear search',
        ],
      },
      {
        type: 'input',
        message: 'select number 1-50000000',
        name: 'number',
      },
    ])
    .then((response) => {
      if ((response.list = 'Binary search, iterative')) {
        binarySearchIterative(array, response.number);
      } else if ((response.list = 'Binary search, recursive')) {
        binarySearchRecursive(array, response.number);
      } else if ((response.list = 'Linear search')) {
        linearSearch(array, response.number);
      }
    });
}
question();

function binarySearchIterative(array, value) {
  console.log(value);
  let val = Number(value);
  console.log(val);
  let low_point = 0;
  let hi_point = array.length - 1;
  const startTimer = performance.now();
  while (low_point <= hi_point) {
    let mid = Math.floor((low_point + hi_point) / 2);
    if (array[mid] === val) {
      console.log(`value found at index position ${mid}`);
      const finishTimer = performance.now();
      console.log(
        `It took me ${
          finishTimer - startTimer
        } milliseconds to complete the search using binary search iterative method`
      );
      question();
      return true;
    } else if (array[mid] < val) {
      low_point = mid + 1;
    } else {
      hi_point = mid - 1;
    }
  }
  console.log('Number not found in the array');

  return false;
}

function binarySearchRecursive(array, value) {
  let val = Number(value);
  let low_point = 0;
  let hi_point = array.length - 1;
  const startTimer = performance.now();
  if (low_point > hi_point) {
    console.log('Number not found in the array');
    return false;
  }
  let mid = Math.floor((low_point + hi_point) / 2);
  if (array[mid] === val) {
    const finishTimer = performance.now();
    console.log(
      `It took me ${
        finishTimer - startTimer
      } milliseconds complete the search using the binary search recursive method`
    );
    question();
    return true;
  }
  if (array[mid] > x) return recursiveFunction(array, val, low_point, mid - 1);
  else return recursiveFunction(array, val, mid + 1, hi_point);
}

function linearSearch(array, value) {
  let val = Number(value);
  const startTimer = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      const finishTimer = performance.now();
      console.log(
        `It took me ${
          finishTimer - startTimer
        } milliseconds complete the search using the linear search method`
      );
      question();
      return true;
    }
  }
  return false;
}

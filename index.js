import inquirer from 'inquirer';

const array = Array(10000000)
  .fill(0)
  .map((_, index) => index);

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
      message: 'select number 1-10000000',
      name: 'number',
    },
  ])
  .then((response) => {
    if ((response.list = 'Binary search, iterative')) {
      console.log(response.number);
      binarySearchIterative(array, response.number);
    } else if ((response.list = 'Binary search, recursive')) {
      console.log(response.number);
      binarySearchRecursive(array, response.number);
    }
  });

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
        } milliseconds complete the search`
      );
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
      `It took me ${finishTimer - startTimer} milliseconds complete the search`
    );
    return true;
  }
  if (array[mid] > x) return recursiveFunction(array, val, low_point, mid - 1);
  else return recursiveFunction(array, val, mid + 1, hi_point);
}

import inquirer from 'inquirer';

let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

inquirer
  .prompt([{ type: 'input', message: 'select number 1-20', name: 'number' }])
  .then((response) => binarySearchIterative(array, response));

function binarySearchIterative(array, value) {
  let val = Number(value.number);
  console.log(val);
  let low_point = 0;
  let hi_point = array.length - 1;
  console.log(low_point);
  console.log(hi_point);
  const startTimer = performance.now();
  while (low_point <= hi_point) {
    let mid = Math.floor((low_point + hi_point) / 2);
    // console.log(mid);
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
  console.log('-1');

  return false;
}

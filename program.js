/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import readlineSync from 'readline-sync';

function processList(inputList) {
  // Check if the length is a multiple of 10
  if (inputList.length % 10 !== 0) {
    console.log('Error: The list length is not a multiple of 10.');
    process.exit(1);
  }
  // Remove items at positions that are a multiple of 2 or 3
  const processedList = inputList.filter((_, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);
  // Return the processed list
  return processedList;
}

const inputList = readlineSync.question('Enter a list of numbers (separated by commas):').split(',').map(Number);
const result = processList(inputList);
console.log(result);


export default processList;


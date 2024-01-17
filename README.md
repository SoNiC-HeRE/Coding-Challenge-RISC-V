# Getting Started 💻
Run the following command in your terminal to setup the project: 👇

```javascript
npm install
```

# Overview ✍️

## 1) The `program.js` file exports a function named processList that takes a list of numbers as input, performs specific operations, and returns a processed list. The script utilizes the readline-sync library to receive user input for the initial list.

## Usage: 🧑‍💻
To use the `processList` function, follow these steps: 👇

 - Run the script using Node.js: `node program.js`
 - Enter a list of numbers separated by commas when prompted.
<hr>

## Function Details: 📙
The `processList` function performs the following steps:

- Checks if the length of the input list is a multiple of 10; if not, it exits with an error message.
- Removes items at positions that are a multiple of 2 or 3.
- Returns the processed list.

<hr>

## 2) The `test.js` file contains a set of unit tests for the processList function. It uses the assert module to verify that the function behaves as expected under various scenarios.

## Running Tests 🧪
To run the tests, execute the following command in the terminal: 👇

```bash
npm test
```

## Test Cases Covered: 📓

- Empty List: Verifies the function's behavior with an empty input list.
- All Elements Removed: Checks if the function correctly removes elements at specific positions.
- List of Length 10 with Alternating Numbers: Tests the function with a list of alternating numbers.
- Negative Numbers in the List: Ensures the function handles negative numbers appropriately.
- Floating Point Numbers in the List: Validates the function's behavior with floating-point numbers.
- String Values in the List: Tests the function's response when encountering non-numeric values (undefined expected).
- Large Numbers in the List: Checks the function's performance with large numbers.

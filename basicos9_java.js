function sumNumbers(numberList) {
  let sum = 0;
  for (const number of numberList) {
    sum += number;
  }
  return sum;
}

const numbers = [1, 2, 3, 5, 45, 37, 58];
console.log(sumNumbers(numbers));
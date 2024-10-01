// 6. Task: Array Reduction
/* Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array. */

const numbers = [1, 2, 3, 4, 5, 6];

const sumOfEvenNumbers = numbers.reduce(
  (sum, num) => (num % 2 === 0 ? sum + num : sum),
  0
);

console.log(sumOfEvenNumbers);

// 7. Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(isLeapYear(2020));

// 8. Task: Count Vowels:
// Write a function that counts the number of vowels in a given string.

const countVowels = (str) => {
  const vowels = "aeiouAEIOU";
  return str.split("").filter((char) => vowels.includes(char)).length;
};

console.log(countVowels("Happy New Year"));

// 9. Task: Unique Values
/* Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result. */

const num = [1, 2, 2, 3, 4, 4, 5];

const uniqueNum = [...new Set(num)];

console.log(uniqueNum);

// 10. Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

const nums = [10, 5, 8, 3, 15, 7];

const findMax = (nums) => Math.max(...nums);

console.log(findMax(nums));

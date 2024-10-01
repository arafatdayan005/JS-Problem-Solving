// 1. Task: Array Filtering and Mapping
/* Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. */

const people = [
  { name: "John", age: 25, gender: "male" },
  { name: "Jane", age: 30, gender: "female" },
  { name: "Mike", age: 20, gender: "male" },
  { name: "Anna", age: 28, gender: "female" },
];

const filterMales = people
  .filter((person) => person.gender === "male")
  .map((person) => person.name);

console.log(filterMales);

// 2.Task: Object Manipulation
/* Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result. */

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

const getBookTitles = books.map((book) => book.title);

console.log(getBookTitles);

// 3. Task: Function Composition
/* Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5. */

const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;

const composedFunction = (num) => addFive(double(square(num)));

console.log(composedFunction(3));

// 4. Task: Sorting Objects
/* Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array. */

const cars = [
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Honda", model: "Accord", year: 2012 },
  { make: "Tesla", model: "Model S", year: 2020 },
];

const sortedCars = cars.sort((a, b) => a.year - b.year);

console.log(sortedCars);

// 5. Task: Find and Modify
/* Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array. */

const user = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 20 },
];

const findAndModify = (name, newAge) => {
  const person = user.find((person) => person.name === name);
  if (person) {
    person.age = newAge;
  }
};

findAndModify("Jane", 35);
console.log(user);

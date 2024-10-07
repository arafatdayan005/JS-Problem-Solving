// 11. Task: Advanced Sorting
/* Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order. */

const students = [
  { name: 'Alice', grades: [85, 90, 92] },
  { name: 'Bob', grades: [78, 82, 89] },
  { name: 'Charlie', grades: [90, 95, 93] }
];

const sortByAverageGrade = students.sort((a, b) => {
  const avgA = a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
  const avgB = b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
  return avgB - avgA;
});

console.log(sortByAverageGrade);

// 12. Task: Functional Programming - Reduce
/* Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview */

const items = [
  { quantity: 2, price: 100 },
  { quantity: 1, price: 50 },
  { quantity: 5, price: 10 }
];

const calculateTotalValue = items.reduce((total, item) => total + item.quantity * item.price, 0);

console.log(calculateTotalValue);

// 13. Task: Array Intersection
/* Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays. */

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const arrayIntersection = (arr1, arr2) => arr1.filter(item => arr2.includes(item));

console.log(arrayIntersection(array1, array2));

// 14. Task: Object Transformation
/* Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases. */

const customers = [
  { name: 'John', purchases: 3, loyaltyPoints: 100 },
  { name: 'Sarah', purchases: 6, loyaltyPoints: 150 },
  { name: 'Mike', purchases: 7, loyaltyPoints: 200 }
];

const transformLoyaltyPoints = customers.map(customer => {
  if (customer.purchases > 5) {
    return { ...customer, loyaltyPoints: customer.loyaltyPoints * 2 };
  }
  return customer;
});

console.log(transformLoyaltyPoints);

// 15. Task: Function Memoization
/* Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again. */

const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Returning from cache");
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

const expensiveFunction = (n) => {
  if (n <= 1) return n;
  return expensiveFunction(n - 1) + expensiveFunction(n - 2);
};

const memoizedFunction = memoize(expensiveFunction);

console.log(memoizedFunction(10));
console.log(memoizedFunction(10));

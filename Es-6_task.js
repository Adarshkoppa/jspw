
// ES-6 Practice Tasks

/*Task 1 (Destructuring & Template Literals): Create an object representing a movie with the properties title, director, and year. 
Destructure these properties and print a sentence using a template literal, like: "Inception was directed by Christopher Nolan in 2010."*/

const movie = { title:"Inception",director:"Christopher Nolan",year:2010};
const{title,director,year}=movie;
console.log(`${title} was directed by ${director} in ${year}.`);


/*Task 2 (Spread Operator): You have two arrays: const fruits = ["apple", "banana"] and const veggies = ["carrot", "potato"]. 
Use the spread operator to combine them into a single array named shoppingList, adding "milk" at the very beginning of the new array.*/

const fruits = ["apple", "banana"];
const veggies = ["carrot", "potato"];
const shopplingList = ["milk",...fruits,...veggies];
console.log(shopplingList);


/*Task 3 (Default & Rest Parameters): Write a function called createReceipt(storeName = "General Store", ...prices). 
It should calculate the sum of all the prices passed in and return a string using template literals: "Thank you for shopping at [storeName].
 Your total is $[sum]."*/

 function createReceipt(storeName = "General Store",...prices)
 {
    const sum = prices.reduce((total,price)=>total+price, 0);
    return `Thank you for shopping at ${storeName}.
 Your total is $${sum}.`;
 }
 console.log(createReceipt("General Store", 50, 60, 75, 100));
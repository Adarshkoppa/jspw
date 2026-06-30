/*3. Practice Problems: Arrays
===============================
Problem 7: Grocery List Operations
Task: Create an array with 3 grocery items.
Add a new item to the end of the array.
Remove the first item from the array.
Log the final array and its total length.
Goal: Get comfortable with basic array methods like .push(), .shift(), and .length.*/

const grocery_items=["vegetables","eggs","Milk"];
grocery_items.push("fruits");
grocery_items.shift();
console.log(grocery_items,grocery_items.length);



/*Problem 8: Summing an Array
Task: Write a script that takes an array of numbers (e.g., [5, 10, 15, 20]) and calculates the sum of all elements using a loop.
Goal: Understand how to accumulate values while iterating through an array.*/

const numbers = [5,10,15,20];let sum=0;
for(let i=0;i<numbers.length;i++)
{
 sum=sum+numbers[i];
 //console.log(sum);
}
console.log(sum);



/*Problem 9: Filter Even Numbers
Task: Given an array of mixed numbers, create a new array that contains only the even numbers from the original array.
Goal: Master array filtering and transferring elements conditionally.*/

const numberss=[2,5,8,7,10];
var even_numbers=[];
for(let i=0;i<numberss.length;i++)
{
    if(numberss[i]%2==0)
    {
        even_numbers=numberss[i];
        console.log(even_numbers);
    }

}

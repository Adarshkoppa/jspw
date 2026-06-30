/* Practice Problems:
======================
 Functions
 =========

 Problem 4: Temperature ConverterTask: 
 -------------------------------------
Create a function named celsiusToFahrenheit that accepts 
a temperature in Celsius as an argument and returns the temperature in Fahrenheit.
Formula: $F = C \times \frac{9}{5} + 32$
Goal: Learn how to write a basic input-output function with math calculations.*/

function celsiusToFahrenheit(Celsius){

const Fahrenheit = Celsius*(9/5)+32
return Fahrenheit;
}
console.log(celsiusToFahrenheit(100));







/*Problem 5: The Max FinderTask: 
-----------------------------
Write a function called findMax that takes two numbers as arguments and returns the larger number.
 Do not use built-in methods like Math.max().
 Goal: Master conditional statements (if/else) inside functions.*/

function findMax(no1,no2)
{
   
if(no1 > no2)
{
      return no1;
}
else
{
    return no2;
}

}
console.log(findMax(5,7));






 /*Problem 6: Password ValidatorTask: 
 ---------------------------------
 Write a function isValidPassword that accepts a string. 
 It should return true if the password is at least 8 characters long and contains no spaces,
  otherwise return false.
  Goal: Practice combining string methods and boolean logic within a function.*/

function isValidPassword(password)
{
    
if(password.length >= 8 && !password.includes(' '))
    {
return true;
}
else{
   return false; 
}

}
console.log(isValidPassword("Abcd1234"));
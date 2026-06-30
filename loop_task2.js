/*1. Practice Problems: Loops (for, while, for...of)
Problem 1: The Countdown (while loop)
Task: Write a script that logs numbers from 10 down to 1. Once it reaches 1, log "Liftoff!".
Goal: Practice basic while loop syntax and condition tracking.*/

var no=10;
while (no!=0)
{
   console.log(no);
   if(no==1)
   {
    console.log("Liftoff");
   }
   no--; 
}



/*Problem 2: Multiples of 3 (for loop)
Task: Write a loop that iterates from 1 to 30. Print the number only if it is a multiple of 3.
Goal: Practice using the modulo operator (%) inside a traditional for loop.*/

for(let i=1;i<=30;i++)
{
    if(i%3==0)
    {
        console.log(i);
    }
}




/*Problem 3: Character Counter (for...of loop)
Task: Given a string (e.g., "javascript"), use a for...of loop to count how many times the letter "a" appears.
Goal: Practice iterating over strings/iterables using for...of.*/


const searchString="javascript";
let count=0;

for( const char of searchString)
{
    if(char === 'a')
    {
        count++;
    }
}
console.log(`the letter "a" appears ${count} times in ${searchString}`);
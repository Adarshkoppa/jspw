

/*Tasks
Working with variables
importance: 2
    1. Declare two variables: admin and name.
    2. Assign the value "John" to name.
    3. Copy the value from name to admin.
    4. Show the value of admin using alert (must output “John”).*/

        let admin,name;
    name ='john';
    admin = name;
    //alert(admin)
    console.log(admin);


    /*
    Task 1: Basic Declaration and Interaction
    =========================================
    1.Goal: Practice basic declaration using let and const.
    2.Instructions:Declare a constant variable named brand and assign it the string value "Google".
    3.Declare a reassignable variable named currentUsers and assign it the number 1500.
    4.Increase the value of currentUsers by 350 on the next line.
    5.Log both variables to the console.*/

    const brand="Google";
    let currentUsers=1500;
    currentUsers+=350;
    console.log(brand,currentUsers);


/*Task 2: Data Copying
=======================
Goal: Learn how values transfer between variables.
Instructions:Create a variable called originalUsername and set it to "Alice".
Create a second variable called activeAccount.
Copy the value of originalUsername into activeAccount.
Change the value of originalUsername to "Bob".
Log both variables to see if activeAccount changed.*/

let originalUsername = "Alice";
let activeAccount = originalUsername;
 originalUsername = "Bob";
 console.log(originalUsername);
 console.log(activeAccount);
//console.log("originalUsername:",originalUsername);
//console.log("activeAccount:",activeAccount);


/*Task 3: The Template Literal Calculator
Goal: Combine variable manipulation with string formatting.
Instructions:Store your birthYear as a number.
Store a futureYear as a number.
Calculate your age for that future year dynamically by subtracting the two variables.
Store the result in a variable named calculatedAge.
Use a template literal (backticks ` and ${}) to log: "In YEAR, I will be AGE years old."*/

let birthYear = 1994;
let futureYear = 2025;
let calculatedAge = futureYear-birthYear;
console.log(`In YEAR ${futureYear}, I will be AGE ${calculatedAge} years old.`);

/*Task 4: Value Swapping (Without Hardcoding)
Goal: Swap the values of two variables using a temporary third variable.
Instructions:Start with let glassA = "Water" and let glassB = "Juice".
Swap the values so that glassA holds "Juice" and glassB holds "Water".
Rule: You cannot directly type the words "Water" or "Juice" again in your solution.*/

let glassA = "Water";
let glassB = "Juice";
let temp = glassA;
glassA = glassB;
glassB=temp;

console.log("glassA:",glassA);
console.log("glassB:",glassB);


/*Task 5: Block Scope Tracking
Goal: Understand why const/let are safe from leaking out of blocks.
Instructions:Create a block of code using curly braces { }.
Inside the block, declare const framework = "React".
Inside the block, log framework to the console.
Outside the block (below the closing brace), 
try to log framework again.Observe the ReferenceError*/

{
   const framework = "React";
   console.log(framework);
}
console.log(framework);


/*ES-6
======*/
//1. Destructuring

//Destructuring allows you to unpack values from arrays or properties from objects into distinct, easy-to-read variables.
//  It eliminates the need for repetitive object.property syntax.

/*🔬 Object Destructuring*/
const user = {
    username: "Alex99",
    email: "alex@example.com",
    role: "admin"
};

// Instead of writing user.username and user.email repeatedly:
const { username, email, role } = user;

console.log(username); // Output: Alex99
console.log(role);     // Output: admin

/*💡 Interview Tip: You can also rename variables while destructuring:*/
const { username: loginName } = user; console.log(loginName); // Alex99



/*🧪 Array Destructuring*/
const rgb = [255, 128, 0];

// Unpacking by position
const [red, green, blue] = rgb;
console.log(red);   // Output: 255
console.log(blue);  // Output: 0



//2. Spread Operator (...)
//The spread operator expands an iterable (like an array or an object) into individual elements. 
// It is incredibly useful for making shallow copies or merging data.

// 1. Cloning and expanding arrays
const primaryColors = ["red", "yellow", "blue"];
const allColors = [...primaryColors, "green", "purple"]; 
console.log(allColors); // ['red', 'yellow', 'blue', 'green', 'purple']

// 2. Merging Objects
const baseConfig = { theme: "dark", notifications: true };
const userConfig = { ...baseConfig, theme: "light" }; // Overwrites 'theme'

console.log(userConfig); // { theme: "light", notifications: true }



//3. Template Literals
//Template literals use backticks (`) instead of quotes. 
// They allow for easy string interpolation (embedding variables/expressions directly via ${}) and clean multi-line strings.

const product = "Laptop";
const price = 999;

// Old way: "The " + product + " costs $" + price + "."
// ES6 way:
const message = `The ${product} costs $${price}. 
Thank you for shopping with us!`;

console.log(message);
// Output:
// The Laptop costs $999.
// Thank you for shopping with us!



//4. Default Parameters
//Default parameters allow you to initialize functions with default values if no arguments are passed, or if an argument is explicitly passed as undefined.

function greetUser(name = "Guest", dynamicGreeting = "Welcome") {
    return `${dynamicGreeting}, ${name}!`;
}

console.log(greetUser("Alice"));       // Output: Welcome, Alice!
console.log(greetUser());               // Output: Welcome, Guest!
console.log(greetUser("Bob", "Hello")); // Output: Hello, Bob!



//5. Rest Parameter (...)
//Though it looks exactly like the spread operator (...), the rest parameter does the exact opposite.
//  It collects multiple separate arguments into a single, cohesive array. 
// It must always be the last parameter in a function definition.

function calculateTotalScore(playerName, ...scores) {
    // 'scores' becomes a true array containing all arguments passed after playerName
    const total = scores.reduce((sum, score) => sum + score, 0);
    return `${playerName} scored a total of ${total} points.`;
}

console.log(calculateTotalScore("Jordan", 10, 20, 15, 30)); 
// Output: Jordan scored a total of 75 points.
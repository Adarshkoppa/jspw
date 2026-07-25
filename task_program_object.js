/*Task 1: The Config File Update (Object Manipulation)
Scenario: Your framework has a global configuration object. 
Before running a specific test, you need to change the browser type to "Firefox" and turn off headless mode so you can see the browser open.*/

// Starting Code:
const playwrightConfig = {
    timeout: 30000,
    use: {
        browserName: "chromium",
        headless: true,
        screenshot: "only-on-failure"
    }
};

// YOUR TASK:
// 1. Change browserName to "firefox"
// 2. Change headless to false
// 3. Add a brand new property inside 'use' called video and set it to "on"

// Write your code here...

playwrightConfig.browserName="webkit";
playwrightConfig.headless=false;
playwrightConfig.use.video="on";

console.log(playwrightConfig);



/*Task 2: API Request Payload Builder (JSON.stringify)
Scenario: You are writing an API test in Playwright to create a new user.
 The API requires data to be sent as a raw JSON string.
  You need to dynamically inject a unique email address into an object and convert it to JSON.*/


// Starting Code:
const randomId = Math.floor(Math.random() * 1000);
const baseUser = {
    username: "Adarsha_QA",
    role: "Admin"
};

// YOUR TASK:
// 1. Add a new property 'email' to the baseUser object dynamically using the randomId variable (e.g., "adarsha_123@test.com")
// 2. Convert the entire object into a raw JSON string using JSON.stringify().
// 3. Print the final JSON string to the terminal.



// Write your code here...
baseUser.randomId="adarsha_123@test.com";
const finalJson=JSON.stringify(baseUser);
console.log(finalJson);



/*Task 3: API Response Body Validator (JSON.parse + Objects)
Scenario: Your Playwright API test just received a raw text response string from a backend server. 
You need to parse it to check if the login was successful and verify the user's permissions.*/

// Starting Code (Simulated raw response text from network):
const rawApiResponse = '{"success": true, "data": {"token": "tkn_9921", "permissions": ["read", "write", "delete"]}}';

// YOUR TASK:
// 1. Convert rawApiResponse into a usable JavaScript object.
// 2. Write an 'if' statement that checks if 'success' is true.
// 3. Inside that if statement, log the 3rd item in the permissions array ("delete") to the console.

// Write your code here...
    const ResponseObject = JSON.parse(rawApiResponse);
    if(ResponseObject.success)
    {
        console.log(ResponseObject.data.permissions[2]);
    }



    /*Task 4: UI Dropdown Validation (Object.values)
Scenario: You scraped the text values from a UI dropdown menu using Playwright, 
and you want to verify if the option "Manager" exists in your expected roles mapping system.*/


// Starting Code:
const systemRoles = {
    level1: "Guest",
    level2: "Tester",
    level3: "Manager",
    level4: "SuperAdmin"
};

// YOUR TASK:
// 1. Extract all the string values (e.g., "Guest", "Tester"...) into an array using Object.values().
// 2. Use the .includes() array method to check if "Manager" is in that list.
// 3. Console.log true or false.

// Write your code here...
const newObject=Object.values(systemRoles);
if(newObject.includes("Manager"))
{
    console.log(true);
}
else{
    console.log(false);
}



/*Task 5: Dynamic Test Data Reader (Reading Local JSON)
Scenario: You have a file named users.json containing different user profiles.
 You need to write a script that reads this file and determines which user to use based on an environment flag.*/

//Step A: Create a file named users.json in your directory and paste this:

/*JSON
{
  "adminUser": { "id": "admin01", "pass": "adminPass" },
  "standardUser": { "id": "std01", "pass": "stdPass" }
}*/
//Step B: Write the script in a .js file:

//JavaScript
//const fs = require('fs');

// YOUR TASK:
// 1. Read 'users.json' synchronously using fs.readFileSync.
// 2. Parse the text data into a JavaScript object.
// 3. Create a variable called 'targetRole' and set it to "adminUser".
// 4. Use square bracket notation to dynamically print the password of the targetRole. 
//    (Hint: parsedData[targetRole].pass)

// Write your code here...
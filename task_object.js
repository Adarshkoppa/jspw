// 1. Creating a nested object with a method

const test_Environment ={
    url:"https://automationexercise.com",
    browser:"chromium",
    retries:"2",
     credentials : {
        userName:"Admin",
        Password:"Admin123"
    },
// A method inside an object
  getLaunchMessage: function()
  {
    return `launching ${this.browser} heading to  ${this.url}`;
  }

};


// 2. Accessing Data (Dot notation vs Bracket notation)

console.log(test_Environment.url);
console.log(test_Environment.browser);
console.log(test_Environment.credentials.userName);
console.log(test_Environment.credentials);
console.log(test_Environment.getLaunchMessage());


// 3. Modifying & Adding new properties
test_Environment.retries=3;         // Updates existing
test_Environment.headless=true;     // Adds new property
delete test_Environment.browser;    // Deletes a property


// 4. Calling the method
console.log(test_Environment.getLaunchMessage());


//key and values in a object
//Essential Object Methods for Automation
//When verifying API responses or dropdown values, you often need to loop through objects.

const user_Role = {id:101, name:"Adarsha", role:"QA"};
console.log(Object.keys(user_Role));
console.log(Object.values(user_Role));
console.log(Object.entries(user_Role));




//Program: Parsing and Stringifying
//In Playwright, when handling API responses or writing to test data files, you will constantly convert between text (JSON) and memory (Objects).

// Use Case A: You received a text response from an API, need to extract token
const apiRawResponse = '{"status": "success", "token": "AX7591", "expiry": 3600}';

// Convert JSON String -> JS Object to read it
const responseObject = JSON.parse(apiRawResponse);
console.log(responseObject.token); // Output: AX7591



// Use Case B: You want to send user details via an API POST request
const newUser = {
    username: "Adarsha_QA",
    isCreated: true
};


// Convert JS Object -> JSON String to transmit it
const jsonPayload=JSON.stringify(newUser)
console.log(jsonPayload);  // Output: '{"username":"Adarsha_QA","isCreated":true}'






const fs = require('fs');
// Simulating reading the JSON file into your framework

//import fs from 'fs'; this is optional
// 1. Read the raw JSON text from file
const rawData = fs.readFileSync('testData.json','utf-8');


// 2. Parse it so your script can interact with it
const testData = JSON.parse(rawData);


// 3. Injecting it directly into a simulated Playwright test step
function loginTest(user,pass){
    console.log(`Navigating to endpoint: ${testData.endpoints.login} `);
    console.log(`typing username: ${user}`);
    console.log(`typing password: ${pass}`);
    console.log("Login Test Passed! ✅");
}


// Running the test using our parsed object data
loginTest(testData.validUser.username, testData.validUser.password);
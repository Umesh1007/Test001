
//Ternanry (Condional) Operator
// condition ? exprIfTrue : exprIfFalse
let age = 20;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // Output: Yes

//condition ? value if (true) : value if (false)

//eg. and Interview Question

let actualStatusCode = 200;
let expectedStatusCode = 200;
                 //condition ? value if (true) : value if (false)
let testResult = actualStatusCode === expectedStatusCode ? "Test Passed" : "Test Failed";
console.log(testResult); // Output: Test Passed

//eg. and Interview Question

let environment = "staging";
let apiUrl = environment === "production" ? "https://api.production.com" : "https://api.staging.com";
console.log(apiUrl); // Output: https://api.staging.com


//eg. and Interview Question

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:" , browserMode, "mode"); // Output: headless

//eg. and Interview Question TEMPLATE LITERAL

let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Withing SLA" : "Outside SLA";
console.log(`REsponse: ${responseTime}ms - ${slaStatus}`); // Output: Response: 850ms - Within SLA
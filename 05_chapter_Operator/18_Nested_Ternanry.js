//Multiple Conditional (Nested Ternary) Operator
// condition1 ? exprIfTrue1 : condition2 ? exprIfTrue2 : exprIfFalse    

let age = 20;
// age > 18 - he will go Goa, else not else
// Enjoy > 25 - he can enjoy, else not else
let is_Umesh_enjoy = age >18 ? (age > 25 ? "Enjoy" : "no") : "no";
console.log(is_Umesh_enjoy); // Output: Enjoy



//eg. and Interview Question

let statusCode = 400;
let category =
            statusCode < 300 ? "Success" :
            statusCode < 400 ? "Redirection" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode} : ${category}`);
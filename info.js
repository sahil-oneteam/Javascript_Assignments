//this file is just to add notes 

/* 
--> inside the class we don't use function keyword to define a method. 
--> getter and setter comes together. else we will get such error.
    TypeError: Cannot set property radius of #<Circle> which has only a getter
--> while calling the getter method, do not use the paranthesis (). else error
    TypeError: newShape.radius is not a function

--> the fetch API is not implemented in Node. 
--> we need to use an external module for that, like node-fetch.
--> install it in your Node application like this: 
    npm install node-fetch
--> then put the line below at the top of the files where you are using the fetch API
    import fetch from "node-fetch";
--> after adding the import statement we will still get the below error.
--> SyntaxError: Cannot use import statement outside a module 
    to solve this error add or change "type": "module", in your package.json
--> forEach() function of javascript returns undefined. 


*/

// is it necessary to write await in each statement if we are using async with the function, even in the return statement we used await
// try to understand this.radius in constructor block and this._radius in setter and getter methods
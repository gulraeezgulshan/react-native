
/* function myFunc(name = "Pakistan", city) {
    console.log(name)
    console.log(city)
    console.log("Karachi")
    console.log("Aptech")
} */

function yourFunc(name) {
    return ("Hello " + name);
}

//console.log(yourFunc("Pakistan"))
//console.log("-----------------")
//myFunc("Pakistan");


/* function myFunc(nameFunction) {
    return ("Hello " + nameFunction());
} */

/* console.log(myFunc(function () {
    return "Aptech";
})); */

//Add (func(), Multiply())

/* function myFunc(nameFunction) {
    return ("Hello " + nameFunction())
}

function printName(nameFunction, printFunction) {
    printFunction(myFunc(nameFunction)); //console.log("Hello Aptech")
}

printName(function () { return "Aptech" }, console.log);
 */

//Fat Arrow/Lamda expression (=>)

/* const myFunc = (nameFunction) => ("Hello " + nameFunction());

const printName = (nameFunction, printFunction) =>
    printFunction(myFunc(nameFunction));

printName(function () { return "Aptech" }, console.log); */

//Using Variable and Types

//let, const, var

/* function messageFunction(name, weather) {

    message = "Hello Pakistan";

    if (weather === "sunny") {
        message = "It is nice day";
        console.log(message);
    }
    else {
        message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
}

messageFunction("Aptech", "sunny"); */

//Using variable closure


//function inside function
// Inner function can access the variables of outer function using a feature called Closure
function myFunc(name) {

    let myLocalVar = "karachi";

    let innerFunction = function () {
        let innerLocalVar = "lahore";
        return ("Hello " + name + ". My city is " + myLocalVar);
    }

    return innerFunction();
}

console.log(myFunc("Aptech"));





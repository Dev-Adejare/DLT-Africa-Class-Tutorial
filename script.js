//VARIABLE: Global and Local Scope Variables
 
//Global Variable

// let i;
for (i= 0; i < 5; i++) {
    let p = 10;
    console.log(i+p);
}

// console.log(i);
// // console.log(p); :-Local Variable

//OPERATORS AND EQUALITY

//Arithmetic Operators:-  +, -, /, %, ==, ===, Increment (++) & Decreament (--)

// minus (-)
let costi = 15;
let profit;
let salesPricei = 20;

Profit = salesPricei - costi;

console.log(Profit);

// Plus (+) :-for NUmbers

let cost = 15, profitt = 5, salesPrice = cost + profitt;
console.log(salesPrice);

// Plus (+) :-for Strings

//Backtick ( ``):-
let firstName = " Ola", surname = "Ade", fullName = surname + firstName;
console.log(`${fullName} is a big boy`);


let food = "Rice"

console.log(`What will i eat if not ${food}?`);


// The increment (++) and decrement (--) operators are used in JavaScript to increase or decrease the value of a variable by 1. Here's a real-life example of when you might use these operators: Let's say you have a variable called stockQuantity that represents the number of items in stock.

let A = 2;
 A *= 4;
console.log(A);




//Variable => Variable is defined as a container that stores value.
 //It behaves as if it were the value it contains.

 //We can declare variable in two ways;
 // 1. declaration 
 //2. assignment

 let age = 25;
 let price = 10.99;
 let gpa = 2.1;

 console.log(`You are ${age} years old`);
 console.log(`The price is #${price}`);
 console.log(`Your  gpa is ${gpa}`);

 console.log(typeof gpa);
 console.log(typeof price);
 console.log(typeof age);


 let firstNamez = "Kenny";
 let favoiuriteFood = "Pizza";
 let email = "sodiqkehinde64@gmail.com";

 console.log(`Your name is ${firstNamez}`);
 console.log(`You like ${favoiuriteFood}`);
 console.log(`Your email is ${email}`);

 console.log(typeof firstNamez);
 console.log(typeof favoiuriteFood);
 console.log(typeof email);


 //BOOLEANS => These are either true or false

 let online = false;
 let forSale = true;
 let isStudent = true;

 console.log(`Kenny is online: ${online}`);
 console.log(`Is this car for sale: ${forSale}`);
 console.log(`Enrolled: ${isStudent}`);


 let firstNamezz = "Kenny";
 let agee = 25;
 let  isStudentz = false;

 document.getElementById("p1").textContent = `Your name is ${firstNamezz}`;
 document.getElementById("p2").textContent = `You are ${age} years old`;
 document.getElementById("p3").textContent = `Enrolled: ${isStudentz}`;
 
//Arithemetic Operators => operands (Values, variables, etc)
//                         operators (+ - * /)
//                          ex.  11 = x + 5;

let students = 30;

// students = students + 1;
// students = students * 3;
// students = students / 5;
students = students ** 2;

console.log(students);

 

//type conversion = change datatype of a value to another
//                    (strings, numbers, booleans)


// let ages = window.prompt("How old are you?");
// ages = Number(ages);
// ages+=1;

// console.log(ages, typeof ages);

let x = "Pizza"
let y = "Pizza"
let z = "Pizza"

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);



//SOLIU_HOME_WORK

//Write a funcion that prints 1 to 100.
//CONDITIONS
//1. The functions check if any of our numbers is a multiples of 3:

// function printNumbers(){
//     for(let i = 1; i <= 100; i++) {
//         if (i % 3=== 0) {
//             console.log("multiple of 3");
//         } else {
//             console.log(i);
//         }
//     }
// }
// printNumbers();


let i =;
let result = []

const printNums = () => {
    for (i =1; i<= 100; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            result.push("FIZZ");
        }
        else if (i % 5 === 0) {
            result.push("BUZZ");
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            result.push("FIZZBUZZ");
        }
        else {
            result.push(i);
        }
    }
    return result;
}

console.log(printNums());


// Videos

//COUNTER PROGRAM








      





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

//  document.getElementById("p1").textContent = `Your name is ${firstNamezz}`;
//  document.getElementById("p2").textContent = `You are ${age} years old`;
//  document.getElementById("p3").textContent = `Enrolled: ${isStudentz}`;
 
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


// let i =;
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

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;



increaseBtn.onclick = function(){
   count++;
   countLabel.textContent = count; 
}

decreaseBtn.onclick = function(){
   count--;
   countLabel.textContent = count; 
}
resetBtn.onclick = function(){
   count = 0;
   countLabel.textContent = count; 
}


//SOLIU_SATURDAY_TUTORIAL

const cohort = [1 ,2, 3, 4];
cohort.push(5);
console.log(cohort)

cohort.shift(1);
console.log(cohort);

cohort.unshift(0, 1);
console.log(cohort);


//SPLICE

const cohortx = ["Kenny", "ola", "Akin"];
cohortx.splice(0,3, "soliu");
console.log(cohortx);

// console.log(cohortz.splice(1,3));
console.log(cohortx[0]);
      
const apprentices = ["Seun", "Soliu", "Akin"];
const app = apprentices.forEach((apprentice)=>{
    console.log(`${apprentice}, welcome to DLTAfrica`)
})

//MAP()

const numberz = [1, 2, 3, 4]

const numTimesTwo = numberz.map((num) => {
    return num * numberz.indexOf(num);
})
console.log(numTimesTwo);

//VALUE & REFERENCE
//JavaScript has 5 data types that are copied by value: Boolean , null , undefined , String , and Number . We'll call these primitive types.
//JavaScript has 3 data types that are copied by having their reference copied: Array , Function , and Object .

//OBJECT, it's method and declaration

//object literal

//constructor function

function Students ( age, name, height) {
    this.age = age;
    this.name = name;
    this.height = height;
    return this;
}

Students.prototype.isCool = function(){
    console.log('it is cool');
}

const student1 = new Students(30, "Kenny", 23);
console.log(student1);
student1.isCool();

const student2 = new Students(20, "Ade", 21);
console.log(student2);
student2.isCool();

const student3 = new Students(10, "Wale", 13);
console.log(student3);
student3.isCool();




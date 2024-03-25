// Math Objects
// type Math on console, you'll get all math objects in JS

console.log(Math.PI); //3.14159
console.log(Math.E); //2.71828
console.log(Math.abs(-2)); //2
console.log(Math.pow(2, 4)); // 2 ** 4 = 16
console.log(Math.floor(10.99)); //10 nearest smallest integer
console.log(Math.floor(-10.1)); //-11
console.log(Math.ceil(10.1)); //11 nearest largest integer
console.log(Math.random()); // random number between (0, 1). 1 is exclusive

// Random Integers from 1 to 10
let num = Math.random();
num = num * 10;
num = Math.floor(num);
console.log(num);
num++;
console.log(num);

// Practice Qn

// Random number between 1 and 100
let n = Math.random();
n = n * 100;
n = Math.floor(n);
n = n + 1;
console.log(n); //random no. between 1 and 100

//random number between 1 to 5
console.log(Math.floor(Math.random() * 5) + 1);

// random number between 21 to 25
console.log(Math.floor(Math.random() * 5) + 21);


// Guessing Game

// let max = prompt("enter Maximum number you want to guess");
// const rn = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess the number");

// while (true) {
//     if (guess == "quit") {
//         console.log("user quit")
//         break;
//     }

//     if (guess == rn) {
//         console.log("you guessed correct!", rn);
//         break;
//     } else if (guess < rn) {
//         guess = prompt("hint: your guess is too small. please try again")
//     } else {
//         guess = prompt("hint: your guess is too large. please try again");
//     }
// }

// Assignment JS5

// a random number representing a dice roll
console.log(Math.floor(Math.random() * 6) + 1);

// create an object representing a car. and print car's name
const car = {
    name: "porsche",
    model: 2000,
    color: ["blue", "gold", "black"]
};
console.log(car.name);

// create an object person and perform add, update activity
const person = {
    name: "asmita",
    age: 24,
    city: "tansen"
};
person.city = "new york";
person.country = "united states";

console.log(person);

let a = "age"; //access key->value using external variable
console.log(person[a]); //24

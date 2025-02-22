/* 
We have written code below that does the same thing 3 times.

We should REFACTOR this code.

We should write a function, and call the function 3 times.

The results should stay THE SAME
*/

function displayWelcome(firstName, surname) {
  return "Hello " + firstName + " " + surname;
}

let firstName1 = "Katrina";
let surname1 = "Lake";
let greeting1 = displayWelcome(firstName1, surname1);

let firstName2 = "Eric";
let surname2 = "Yuan";
let greeting2 = displayWelcome(firstName2, surname2);

let firstName3 = "Jeff";
let surname3 = "Bezos";
let greeting3 = displayWelcome(firstName3, surname3);

console.log(greeting1);
console.log(greeting2);
console.log(greeting3);
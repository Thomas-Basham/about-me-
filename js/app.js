'use strict';

console.log('well hey there');

let userName = prompt('Hello!, What is your name?');
console.log('user entered ' + userName);
alert(`Welcome ${userName}! Can you guess the answer to these questions? (yes or no answer's only)`);

let answerOne = prompt('Am I a vegetarian?').toLowerCase();
console.log('user entered ' + answerOne);
if (answerOne === 'no' || answerOne === 'n') {
  alert('You are right!');
} else if (answerOne === 'yes' || answerOne === 'y') {
  alert('No, I am an omnivore!');
}

let answerTwo = prompt('Was I in the Millitary?').toLowerCase();
console.log('user entered ' + answerTwo);
if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Oooof!! I was in the Army');
} else if (answerTwo === 'yes' || answerTwo === 'y') {
  alert(`That's right, ${userName}!`);
}
let answerThree = prompt('Do you think I have any children?').toLowerCase();
console.log('user entered ' + answerThree);
if (answerThree === 'no' || answerThree === 'n') {
  alert('That is correct!');
} else if (answerThree === 'yes' || answerThree === 'y') {
  alert('No, I do not have any kiddos of my own.');
}
let answerFour = prompt('Was I raised in the city?').toLowerCase();
console.log('user entered ' + answerFour);
if (answerFour === 'no' || answerFour === 'n') {
  alert('Correct! I grew up on a farm with chickens, turkeys, pigs, and a cow.');
} else if (answerFour === 'yes' || answerFour === 'y') {
  alert('I was not!');
}
let answerFive = prompt('Do I like the outdoors?').toLowerCase();
console.log('user entered ' + answerFive);
if (answerFive === 'no' || answerFive === 'n') {
  alert('That\'s just not true, sadly.');
} else if (answerFive === 'yes' || answerFive === 'y') {
  alert('I do! I enjoy hiking, fishing, hunting, and camping.');
}
// let attempts = 0;
// let myNumber = 7;

// let userNumber = prompt('Guess a number between 1 and 10?');
// console.log('user entered ' + userNumber);

// while (userNumber !== myNumber){
//   alert('you are incorrect');
//   attempts++;

//   if(userNumber < myNumber){
//     alert('Too low!');
//   }
//   else(userNumber > myNumber);
//   alert('Too high!');
// }
// if(userNumber === myNumber){
//   alert('Thats the one!');
// }
// if(attempts === 3){
//   alert('You are out of guesses, sorry!');
// }

// let colors = [blue, green, yellow];
// let blue = colors[0];
// let green = colors[1];
// let yellow = colors[2];

// let answer7 = prompt('Is my favorite color blue, green, or yellow?').toLowerCase();
// console.log('user entered ' + answer7);

// if (answer7 !== [blue]){
//   alert('false!');
// }
// else if (answer7 === [blue]){
//   alert('true!');
// }




alert(`As you've discovered, ${userName}, I'm just an ordinary childless omivore veteran who was raised in the country and like's the outdoors! click ok to read more about me`);


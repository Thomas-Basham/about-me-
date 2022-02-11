'use strict';

console.log('well hey there');

let counter = 0;

let userName = prompt('Hello!, What is your name?');
console.log('user entered ' + userName);
alert(`Welcome ${userName}! Can you guess the answer to these questions? (yes or no answer's only)`);

function questionOne() {
  let answerOne = prompt('Am I a vegetarian?').toLowerCase();
  console.log('user entered ' + answerOne);
  if (answerOne === 'no' || answerOne === 'n') {
    alert('You are right!');
    counter++;
  } else if (answerOne === 'yes' || answerOne === 'y') {
    alert('No, I am an omnivore!');
  }
}
questionOne();

let answerTwo = prompt('Was I in the Military?').toLowerCase();
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

//guessing game 




// let attempts = 4;

// let myNumber = 7;

// while(attempts){
//   attempts--;
//   let userNumber = prompt('gGuess a number between 1 and 10?');

//   if(userNumber === myNumber){
//     alert('Thats the one!');
//     break;
//   }else if(userNumber > myNumber){
//     alert('Too high!');
//     else {
//       alert('too low');
//     }

// if(attempts === 0) {
//   alert(`correct answer was ${myNumber}`)
//     }

//  }






let myArr = [blue, green, yellow];

let newAttempts = 6

while (newAttempts) {
  newAttempts--;
  let colorGuess = prompt('can you guess my favorite color?');

  for (let i = 0; i < myArr.length; i++) {
    if (colorGuess === myArr[i]) {
      alert('Yay! You are right!);
      newAttempts = 0;
    }
  }





// alert(`As you've discovered, ${userName}, I'm just an ordinary childless omivore veteran who was raised in the country and like's the outdoors! click ok to read more about me`);

'use strict';

console.log('well hey there');

let userName = prompt('What is your name?');
console.log('user entered' + userName);
alert(`Welcome ${userName}! Can you guess the answer to these questions?`);

let answerOne = prompt('Am I a vegetarian?').toLowerCase();
console.log('user entered' + answerOne);
if (answerOne === 'no' || answerOne === 'n') {
  alert('You are right!');
} else if (answerOne === 'yes' || answerOne === 'y') {
  alert('No, I am an omnivore!');
}

let answerTwo = prompt('Am I a vegetarian?').toLowerCase();
console.log('user entered' + answerTwo);
if (answerTwo === 'no' || answerTwo === 'n') {
  alert('You are right!');
} else if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('No, I am an omnivore!');
}
let answerThree = prompt('Am I a vegetarian?').toLowerCase();
console.log('user entered' + answerThree);
if (answerThree === 'no' || answerThree === 'n') {
  alert('You are right!');
} else if (answerThree === 'yes' || answerThree === 'y') {
  alert('No, I am an omnivore!');
}
let answerFour = prompt('Am I a vegetarian?').toLowerCase();
console.log('user entered' + answerFour);
if (answerFour === 'no' || answerFour === 'n') {
  alert('You are right!');
} else if (answerFour === 'yes' || answerFour === 'y') {
  alert('No, I am an omnivore!');
}
let answerFive = prompt('Am I a vegetarian?').toLowerCase();
console.log('user entered' + answerFive);
if (answerFive === 'no' || answerFive === 'n') {
  alert('You are right!');
} else if (answerFive === 'yes' || answerFive === 'y') {
  alert('No, I am an omnivore!');
}

alert(`As you've discovered, ${userName}, I'm a `);

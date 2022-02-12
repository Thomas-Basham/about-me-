'use strict';

console.log('well hey there');

let counter = 0; //counter for correct guesses in the end

// greeting

let userName = prompt('Hello!, What is your name?');
console.log('user entered ' + userName);
alert(`Welcome ${userName}! Can you guess the answer to these questions? (yes or no answer's only)`);

// first question
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


// second question
function questionTwo() {
  let answerTwo = prompt('Was I in the Military?').toLowerCase();
  console.log('user entered ' + answerTwo);
  if (answerTwo === 'no' || answerTwo === 'n') {
    alert('Oooof!! I was in the Army');
  } else if (answerTwo === 'yes' || answerTwo === 'y') {
    alert(`That's right, ${userName}!`);
    counter++;
  }
}
questionTwo();


// third question
function questionThree() {
  let answerThree = prompt('Do you think I have any children?').toLowerCase();
  console.log('user entered ' + answerThree);
  if (answerThree === 'no' || answerThree === 'n') {
    alert('That is correct!');
    counter++;
  } else if (answerThree === 'yes' || answerThree === 'y') {
    alert('No, I do not have any kiddos of my own.');
  }
}
questionThree();


// fourth question
function questionFour() {
  let answerFour = prompt('Was I raised in the city?').toLowerCase();
  console.log('user entered ' + answerFour);
  if (answerFour === 'no' || answerFour === 'n') {
    alert('Correct! I grew up on a farm with chickens, turkeys, pigs, and a cow.');
    counter++;
  } else if (answerFour === 'yes' || answerFour === 'y') {
    alert('I was not!');
  }
}

questionFour();

// fifth question
function questionFive() {
  let answerFive = prompt('Do I like the outdoors?').toLowerCase();
  console.log('user entered ' + answerFive);
  if (answerFive === 'no' || answerFive === 'n') {
    alert('That\'s just not true!');
  } else if (answerFive === 'yes' || answerFive === 'y') {
    alert('I do! I enjoy hiking, fishing, hunting, and camping.');
    counter++;
  }
}

questionFive();

//guessing game

function guessingGame(){

  let myNumber = '7';

  for (let i = 0; i < 4; i++) {
    let userNumber = prompt ('Now guess a number between 1 and 10?!');
    if(userNumber === myNumber) alert('Thats the one!');
    if(userNumber === myNumber) counter++;
    if (userNumber === myNumber) break;
    if(userNumber > myNumber) alert ('Too high!');
    if(userNumber < myNumber) alert ('Too low!');

    if (i === 3) {alert(`correct answer was ${myNumber}`);
    }
  }
}

guessingGame();

//color game

function colorGame() {
  let favColors = ['blue', 'green', 'yellow'];

  for (let i = 0; i < 6; i++) {
    let userGuess = prompt('Now can you guess one of my favorite colors?').toLowerCase();
    for (let j = 0; j < favColors.length; j++) {
      if (userGuess === favColors[j]) {
        alert('Correct!');
        counter++;
        j = 10;
        i = 10;
      }
    }
    if (i === 5) {
      alert('Sorry no more guesses.');
    }
  }
}
colorGame();

alert('My favorite colors are blue, green, and yellow.');

alert(`As you've discovered, ${userName}, I'm just an ordinary childless omivore veteran who was raised in the country and like's the outdoors! By the way you got ${counter} out of 7 answers correct!`);


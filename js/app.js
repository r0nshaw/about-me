'use strict';
var correctAnswer = 0;
var userName = prompt('Hi, who are you?').toUpperCase();

// as a developer, I want to provide five questions to the user, so that they can guess the answers and get to know me
// as a developer i want to receive and use the user's name, so that the program is personalized to their experience

// question 1, who are you


// as a developer, I want to notify the user after each question, so they are aware whether they were correct or not in their answers

// Question 2, how many hats


// if(user gets the correct number) {
// tell the user they were correct
// } else {
// tell the user they were wrong and tell them correct answer
// }
function numberOfHats() {
  if(hats === '9') {
    alert('Yessssss! I do have 9 hats ' + userName + '!');
    correctAnswer++;
  } else {
    alert('Sorry ' + userName + '. I have 9 hats!');
  }
}

// Question 3, question about city

function city() {
  if(cityFrom === 'Y') {
    alert('No, ' + userName + ', I\'m actually not. I\'m from Tacoma.');
  } else if (cityFrom === 'N') {
    alert('You\'re right ' + userName + '. I\'m from Tacoma!');
    correctAnswer++;
  } else {
    alert('Wrong because you didn\'t answer with Y or N. I\'m from Tacoma!');
  }
}

// Question 4, question about ice cream preference

function flavor() {
  if(iceCream === 'Y'){
    alert('Sorry ' + userName + '. I like vanilla a little better.');
  } else if (iceCream === 'N'){
    alert('Great ' + userName + '. I do, in fact, like vanilla better.');
    correctAnswer++;
  } else {
    alert('Come on ' + userName + '. Follow the directions. By the way, I like vanilla better.');
  }
}

// Question 5, question about seafood

function seaFoodLike() {
  if(seaFood === 'Y'){
    alert('Nice try ' + userName + ', but I don\'t like any seafood.');
  } else if (seaFood === 'N'){
    alert('Awesome ' + userName + '. You\'re correct!');
    correctAnswer++;
  } else {
    alert('That answer is inappropriate!');
  }
}

// As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.

// Question 6, guess how many brothers I have

var answer = 2;
function brother() {
  for(var i = 0; i < 4; i++){
    if(answer === guess){
      alert('Correct');
      correctAnswer++;
      i = 4;
    } else {
      if(guess > answer){
        alert('Too high');
      } else {
        if(guess < answer){
          alert('Too Low');
        }
      }
      guess = parseInt(prompt('Try again'));
    }
  }
}
// question 7, guess my favorite sport

var favoriteSports = ['basketball', 'football', 'baseball'];

function sports() {
  for(var sportsTries = 0; sportsTries < 6; sportsTries++) {
    var sportGuess = prompt('Can you guess one of my favorite sports?').toLowerCase();
    var gotItCorrect = false;
    for(var j = 0; j < favoriteSports.length; j++) {
      if(sportGuess === favoriteSports[j]) {
        alert('That is correct! I love ' + favoriteSports[j]);
        correctAnswer++;
        gotItCorrect = true;
        break;
      }
      // sportGuess = prompt('Can you guess one of my favorite sports?');
    }
    if(gotItCorrect === false) {
      alert('Sorry, that\'s wrong.');
    } else {
      break;
    }
    console.log('User last guessed that this was one of my favorite sports: ' + sportGuess);
  }
}


alert('Nice to meet you ' + userName + '.');
console.log('The user\'s name is ' + userName);
var hats = prompt('How many hats do you think I have?');
numberOfHats();
console.log('Number of hats the user thinks I have: ' + hats);
var cityFrom = prompt('Do you think I\'m from Seattle? Please respond with Y or N').toUpperCase();
city();
console.log('User thinks I\'m from Seattle: ' + cityFrom);
var iceCream = prompt(userName + ', do I like strawberry ice cream better than vanilla? Please respond with Y or N').toUpperCase();
flavor();
console.log('User thinks I like strawberry ice cream better than vanilla: ' + iceCream);
var seaFood = prompt('Next question... Do I like seafood? Please respond with Y or N').toUpperCase();
seaFoodLike();
console.log('User thinks I like seafood: ' + seaFood);
alert('How many brothers do I have? You have 4 guesses.');
var guess = parseInt(prompt('What is your guess?'));
brother();
console.log('User last guessed I have this many brothers: ' + guess);
sports();
// score tracker
alert('Nice job ' + userName + '. You got ' + correctAnswer + ' correct out of 6 possible.');

console.log('User got ' + correctAnswer + ' correct out of 6 possible');
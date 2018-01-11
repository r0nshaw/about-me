'use strict';

// as a developer, I want to provide five questions to the user, so that they can guess the answers and get to know me
// as a developer i want to receive and use the user's name, so that the program is personalized to their experience

// question 1, who are you
var correctAnswer = 0;
var userName = prompt('Hi, who are you?').toUpperCase();

alert('Nice to meet you ' + userName + '.');
console.log('The user\'s name is ' + userName);

// as a developer, I want to notify the user after each question, so they are aware whether they were correct or not in their answers

// Question 2, how many hats

var hats = prompt('How many hats do you think I have?');

// if(user gets the correct number) {
// tell the user they were correct
// } else {
// tell the user they were wrong and tell them correct answer
// }

if(hats === '9') {
    alert('Yessssss! I do have 9 hats ' + userName + '!');
    correctAnswer++;
} else {
    alert('Sorry ' + userName + '. I have 9 hats!')
}
console.log('Number of hats the user thinks I have: ' + hats);

// Question 3, question about city

var cityFrom = prompt('Do you think I\'m from Seattle? Please respond with Y or N').toUpperCase();

if(cityFrom === 'Y') {
    alert('No, ' + userName + ', I\'m actually not. I\'m from Tacoma.');
} else if (cityFrom === 'N') {
    alert('You\'re right ' + userName + '. I\'m from Tacoma!');
    correctAnswer++;
} else {
    alert('Wrong because you didn\'t answer with Y or N. I\'m from Tacoma!');
}
console.log('User thinks I\'m from Seattle: ' + cityFrom);

// Question 4, question about ice cream preference

var iceCream = prompt(userName + ', do I like strawberry ice cream better than vanilla? Please respond with Y or N').toUpperCase();

if(iceCream === 'Y'){
    alert('Sorry ' + userName + '. I like vanilla a little better.');
} else if (iceCream === 'N'){
    alert('Great ' + userName + '. I do, in fact, like vanilla better.');
    correctAnswer++;
} else {
    alert('Come on ' + userName + '. Follow the directions. By the way, I like vanilla better.');
}
console.log('User thinks I like strawberry ice cream better than vanilla: ' + iceCream);

// Question 5, question about seafood

var seaFood = prompt('Next question... Do I like seafood? Please respond with Y or N').toUpperCase();

if(seaFood === 'Y'){
    alert('Nice try ' + userName + ', but I don\'t like any seafood.');
} else if (seaFood === 'N'){
    alert('Awesome ' + userName + '. You\'re correct!');
    correctAnswer++;
} else {
    alert('That answer is inappropriate!');
}
console.log('User thinks I like seafood: ' + seaFood);

// As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.

// Question 6, guess how many brothers I have
alert('How many brothers do I have? You have 4 guesses.');

var answer = 2;
var guess = prompt('What is your guess?');

for(var i=0; i<4; i++){
  if(answer == guess){
    alert('Correct');
    correctAnswer++;
    break;
  } else {
    if(guess > answer){
      alert('Too high');
    } else {
      if(guess < answer){
        alert('Too Low');
      }
    }
    guess = prompt('Try again');
  }
}
console.log('User last guessed I have this many brothers: ' + guess);
// question 7, guess my favorite sport

var favoriteSports = ['basketball', 'football', 'baseball'];


var sportGuess = prompt('Can you guess one of my favorite sports?').toLowerCase();
var gotItCorrect = false;
for(var i = 0; i < favoriteSports.length; i++) {
    if(sportGuess === favoriteSports[i]) {
      alert('That is correct! I love ' + favoriteSports[i]);
      correctAnswer++;
      gotItCorrect = true;
      break;
    }
    // sportGuess = prompt('Can you guess one of my favorite sports?');
}
if(gotItCorrect === false) {
    alert('Sorry, that\'s wrong.');
}
console.log('User last guessed that this was one of my favorite sports: ' + sportGuess);
// score tracker
alert('Nice job ' + userName + '. You got ' + correctAnswer + ' correct out of 6 possible.');

console.log('User got ' + correctAnswer + ' correct out of 6 possible');


'use strict';

// as a developer, I want to provide five questions to the user, so that they can guess the answers and get to know me
// as a developer i want to receive and use the user's name, so that the program is personalized to their experience

var userName = prompt('Hi, who are you?');

alert('Nice to meet you ' + userName + '.');

// as a developer, I want to notify the user after each question, so they are aware whether they were correct or not in their answers

var hats = prompt('How many hats do you think I have?');

// if(user gets the correct number) {
// tell the user they were correct
// } else {
// tell the user they were wrong and tell them correct answer
// }

if(hats === '9') {
    alert('Yessssss! I do have 9 hats ' + userName + '!');
} else {
    alert('Sorry ' + userName + '. I have 9 hats!')
}

// question about city

var cityFrom = prompt('Do you think I\'m from Seattle? Please respond with Y or N').toUpperCase();

if(cityFrom === 'Y') {
    alert('No, ' + userName + ', I\'m actually not. I\'m from Tacoma.');
} else if (cityFrom === 'N') {
    alert('You\'re right ' + userName + '. I\'m from Tacoma!');
} else {
    alert('Wrong because you didn\'t answer with Y or N. I\'m from Tacoma!');
}

// question about ice cream preference

var iceCream = prompt(userName + ', do I like strawberry ice cream better than vanilla? Please respond with Y or N').toUpperCase();

if(iceCream === 'Y'){
    alert('Sorry ' + userName + '. I like vanilla a little better.');
} else if (iceCream === 'N'){
    alert('Great ' + userName + '. I do, in fact, like vanilla better.');
} else {
    alert('Come on ' + userName + '. Follow the directions. By the way, I like vanilla better.');
}
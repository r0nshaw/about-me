'use strict';

var userName = prompt('Hi, who are you?');

alert('Nice to meet you ' + userName + '.');

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
    alert('No, ' + userName + ', I\'m actually not. I\'m from Tacoma.')
} else if (cityFrom === 'N') {
    alert('You\'re right ' + userName + '. I\'m from Tacoma!');
} else {
    alert('Wrong because you didn\'t answer with Y or N. I\'m from Tacoma!');
}

// print to the developer console to makesure javascript is working!
console.log('javascript is working');

/* ask the user their name */
var userName = prompt('Thank you for wanting to learn more about me! What is your name?');
console.log(userName);
/* greet the user by name */
alert('Hi ' + userName + ', I have a fun five question yes or no guessing game for you so that you can learn even more about me!');
/*create a variable to track the number of correct answers*/
var correctAnswers = 0;
/*create a variable to track the number of questions*/
var totalQuestions = 0;
/* ask the first yes or no question using a prompt*/
var firstQuestion = prompt('Was I born in Renton, Washington? Please answer yes or no.');
totalQuestions ++;
/* put user response in correct format, y to YES, yes to YES, and evaluate if the first question has been answered correctly,*/
if(firstQuestion.toUpperCase() === 'Y' || firstQuestion.toUpperCase() === 'YES'){
  console.log(firstQuestion);
  alert('Yay, you are correct!');
  correctAnswers ++;
} else {
  alert('Sorry, you are incorrect.');
}
var secondQuestion = prompt('Do I have three college educated daughters? Please answer yes or no.');
totalQuestions ++;
if(secondQuestion.toUpperCase() === 'Y' || secondQuestion.toUpperCase() === 'YES'){
  alert('Yay, you are correct!');
  correctAnswers ++;
} else {
  alert('Sorry, you are incorrect.');
}

console.log(secondQuestion);

var thirdQuestion = prompt('Do I enjoy wakeskating and karaoke? Please answer yes or no.');
totalQuestions ++;
if(thirdQuestion.toUpperCase() === 'Y' || thirdQuestion.toUpperCase() === 'YES'){
  alert('Yay, you are correct!');
  correctAnswers ++;
} else {
  alert('Sorry, you are incorrect.');
}

console.log(thirdQuestion);

var fourthQuestion = prompt('Is my favorite book "Wise Man" by Flannery OConnor? Please answer yes or no.');
totalQuestions ++;
if(fourthQuestion.toUpperCase() === 'Y' || fourthQuestion.toUpperCase() === 'YES'){
  alert('Yay, you are correct!');
  correctAnswers ++;
} else {
  alert('Sorry, you are incorrect.');
}

console.log(fourthQuestion);

var fifthQuestion = prompt('Did I once own a Suzuki GSXR 1000? Please answer yes or no.');
totalQuestions ++;
if(fifthQuestion.toUpperCase() === 'Y' || fifthQuestion.toUpperCase() === 'YES'){
  alert('Yay, you are correct!');
  correctAnswers ++;
  console.log(fifthQuestion);
  var sixthQuestion = prompt('Because you got that right you get to answer one more question. Is my favorite pie, apple?');
  totalQuestions ++;
  if(sixthQuestion.toUpperCase() === 'Y' || sixthQuestion.toUpperCase() === 'YES'){
    alert('Yay, you are correct! Thank you for taking the time to learn about me.');
    correctAnswers ++;
  } else {
    alert('Sorry, you are incorrect. But, thank you for taking the time to learn about me.');
  }
}
console.log(sixthQuestion);

/* This code asks the user to guess a number. The user gets four chances
and receives feedback after each guess whether the answer is high or low and is told
whether the guess is correct or failed after four guesses.*/

alert('Lastly, I want you to guess the jersey number I wore when I played High School football. There are four quarters in a game, so you have four chances.');

var numberOfGuesses = 0;

while (numberGuessed !== 52 && numberOfGuesses < 4){
  var numberGuessed = parseInt(prompt('Guess my football jersey number?'));
  totalQuestions ++;
  console.log('User guessed' + numberGuessed);

  if(Number.isNaN(numberGuessed) === true){
    alert('I wore a number on my Jersey. Guess again please');
    numberOfGuesses++;
    console.log('User guessed' + numberGuessed);

  } else if (numberGuessed > 52){
    alert('You guessed high.');
    numberOfGuesses++;
    console.log('User guessed' + numberGuessed);

  } else if (numberGuessed < 52){
    alert('You guessed low.');
    numberOfGuesses++;
    console.log('User guessed' + numberGuessed);

  } else {
    alert('You guessed correctly, I wore number 52.');
    console.log('User guessed' + numberGuessed);
    correctAnswers ++;
  }
}

if (numberOfGuesses === 4 && numberGuessed !== 52){
  alert('Too many guesses.  The clock has ran out.');
}
alert('Thank you for playing ' + userName + '.  Out of ' + totalQuestions + ' questions, you answered' + correctAnswers + ' correctly.');

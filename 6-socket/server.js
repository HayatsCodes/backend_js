const termkit = require('terminal-kit');
const term = termkit.terminal;

const randomNumber = Math.floor(Math.random() * 10) + 1;
let guesses = 3;

term('Welcome to the Number Guessing Game!\n');
term('Guess a number between 1 and 10\n');

term.inputField({ prompt: 'Enter your guess: ' }, (error, input) => {
  if (Number(input) === randomNumber) {
    term.green('\nCongratulations! You guessed the correct number.\n');
    term.processExit();
  } else {
    guesses--;
    if (guesses > 0) {
      term.red(`Wrong guess! You have ${guesses} guesses remaining.\n`);
      term.inputField({ prompt: 'Enter your guess: ' });
    } else {
      term.red(`Game over! The correct number was ${randomNumber}.\n`);
      term.processExit();
    }
  }
});

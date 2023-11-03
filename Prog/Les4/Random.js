const minNumber = 0;
const maxNumber = 100;
const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempts = 0;

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function guessNumber() {
  rl.question('Raad het getal tussen 0 en 100: ', (userInput) => {
    const userGuess = parseInt(userInput);

    if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
      console.log('Ongeldige invoer. Voer een getal tussen 0 en 100 in.');
    } else {
      attempts++;

      if (userGuess === secretNumber) {
        console.log(`Gefeliciteerd! Je hebt het juiste getal geraden in ${attempts} pogingen.`);
        rl.close();
      } else if (userGuess < secretNumber) {
        console.log('Het geraden getal is te laag. Probeer opnieuw.');
        guessNumber();
      } else {
        console.log('Het geraden getal is te hoog. Probeer opnieuw.');
        guessNumber();
      }
    }
  });
}

console.log('Welkom bij het raadspel!');
guessNumber();
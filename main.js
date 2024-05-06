import "./style.css";
import getRandomWord from "./src/randomWord.js";
import setSharkImage from "./src/sharkImage.js";
import {
  setupWord,
  isLetterInWord,
  revealLetterInWord,
  guessedEntireWord,
} from "./src/word.js";
import setupGuesses from "./src/guess.js";
import checkEndOfGame from "./src/endGame.js";

document.querySelector("#app").innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();
  const sharkImageNode = document.querySelector("#shark-img");

  setSharkImage(sharkImageNode, numWrong);
  setupWord(document.querySelector("#word-container"), word);

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);

  const handleGuess = (guessEvent, letter) => {
    guessEvent.target.disabled = true;
    if (isLetterInWord(letter)) {
      revealLetterInWord(letterBoxes, letter);
    } else {
      numWrong++;
      setSharkImage(sharkImageNode, numWrong);
    }
    checkEndOfGame(letterBoxes, numWrong);
  };

  const letterBoxes = setupGuesses(
    document.querySelector("#letter-buttons"),
    handleGuess
  );
};

initSharkwords();

// TODO: If the user loses, fill in the rest of the letter boxes with the rest of the word.

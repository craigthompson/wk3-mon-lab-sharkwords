let word; // a module-scoped variable that will be used in the helper functions.

/**
 * This function is called to generate the blank spaces that represent letters in our secret word.
 * For example, if the word is array it’ll generate five blank spaces: _ _ _ _ _.
 *
 * It will also set a value for the word variable; word is a module-scoped variable will be used in
 * the helper functions, isLetterInWord and revealLetterInWord.
 *
 * @param {*} element
 * @param {*} initWord
 */
function setupWord(element, initWord) {
  word = initWord;
  initWord
    .split("")
    .forEach(() => (element.innerHTML += `<div class="letter-box"></div>`));
}

/**
 * This should return true if the given letter is in word. Otherwise, it should return false.
 * For example, if word is 'array', isLetterInWord('a') should return true.
 *
 * @param {*} letter
 * @returns {Boolean} true if the given letter is in the word, or false if not.
 */
function isLetterInWord(letter) {
  return word.includes(letter);
}

/**
 * This is called when the user makes a correct guess. It’ll display the letters in their correct
 * locations according to the value of word.
 * For example, if word is 'array', then revealLetterInWord('a') will cause the game to display a _ _ a _.
 *
 * @param {*} letterBoxes
 * @param {*} letter
 */
function revealLetterInWord(letterBoxes, letter) {
  word.split("").forEach((char, index) => {
    if (char === letter) {
      letterBoxes[index].innerText = letter;
    }
  });
}

/**
 * Checks if the entire word has been guessed.
 *
 * @param {*} letterBoxes
 * @returns {Boolean} true if the entire word has been guessed, otherwise false.
 */
function guessedEntireWord(letterBoxes) {
  return (
    [...letterBoxes].filter((letterBox) => letterBox.innerText === "")
      .length === 0
  );
}

export { setupWord, isLetterInWord, revealLetterInWord, guessedEntireWord };

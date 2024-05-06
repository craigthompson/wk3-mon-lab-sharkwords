const alphabet = "abcdefghijklmnopqrstuvwxyz";

function setupGuesses(element, handleGuess) {
  // Convert alphabet string to an array of each character and iterate over the array.
  alphabet.split("").forEach((letter) => {
    // Create a button element and assign it to the variable 'btn'.
    const btn = document.createElement("button");
    // Change the button's inner text to be the given letter passed as an argument to the function.
    btn.innerText = letter;
    // Attach a 'click' event listener to the button and call the given callback function with the event and letter from the array created from the alphabet string.
    btn.addEventListener("click", (e) => handleGuess(e, letter));
    btn.classList.add("letter");
    // Inserts the button node as the last child of the given element passed to the function.
    element.append(btn);
  });
  return document.querySelectorAll(".letter-box");
}

export default setupGuesses;

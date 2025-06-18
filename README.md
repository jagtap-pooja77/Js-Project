# 🎯 Guess the Number (Vanilla JavaScript)

A fun and interactive number guessing game built with plain HTML, CSS & JavaScript. The browser picks a number between 1 and 100, and you try to guess it—with feedback and attempt tracking!

---

## 🧠 Features

- Random number generated between 1–100 on page load or restart.
- User input field to enter guesses.
- Instant feedback:
  - 📈 "Too high!"
  - 📉 "Too low!"
  - 🎉 "Correct!"
- Displays the number of attempts.
- “Restart” button appears after a correct guess.
- Styled with gradients, rounded corners, hover effects, and a clean layout.

---

## 🚀 Live Demo


[▶️ Play the Guess the Number Game](https://your-live-demo-link.com)

---

## 📁 File Structure

├── index.html # HTML structure (input, buttons, feedback)

├── style.css # CSS styles (layout, colours, responsive design)

└── script.js # JS logic (random number, input handling, DOM manipulation)

---

## 🔧 How it Works
1. Game Initialization (initializeGame() in script.js):

Generates a random number between 1 and 100.

Resets attempt count and UI elements.

2. User Makes a Guess:

Click "Guess" button—JavaScript checks input validity.

Updates attempt counter.

Compares guess vs. target:

Displays “Too high” or “Too low”.

If correct, shows success message and reveals “Restart”.

3. Restart:

Click "Restart" to reinitialize the game.

---

## 🧩 Tech Stack
-HTML5 – Structure & content

-CSS3 – Styling & layout

-JavaScript – Game logic, DOM manipulation, and event handling

---

## 🌟 Why This Project?
This is a beginner-friendly exercise to learn and practice:

-Generating random numbers

-Handling user input

-Using conditionals & control flow

-Updating the DOM efficiently

-Applying basic CSS styling for UI/UX enhancement



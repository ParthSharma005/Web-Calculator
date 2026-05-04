# Calculator Web App

A clean and interactive **calculator web app** built using **HTML, CSS, and JavaScript**.
This project focuses on implementing real-world calculator logic, handling edge cases, and managing application state effectively.

---

## Features

* Basic arithmetic operations (Addition, Subtraction, Multiplication, Division)
* Advanced operations

  * Square (`x²`)
  * Square root (`√x`)
* Smart input handling

  * Prevents multiple operators in succession
  * Replaces operators when pressed consecutively
  * Prevents invalid inputs
* Backspace functionality

  * Handles multi-character operators like `**2` and `**0.5`
* State-aware behavior

  * Proper handling after `=` (continue calculation or start new one)
* Decimal control system
* Clean and modern UI with grid layout and gradients

---

## Tech Stack

* **HTML** – Structure
* **CSS** – Styling (Flexbox + Grid)
* **JavaScript** – Logic and interactivity

---

## Preview

(Add a screenshot of your calculator here)

---

## Project Structure

```
├── Calc.html
├── Calc.css
├── Calc.js
├── Calc.png
```

---

## What I Learned

* Managing application state (`display`, `solved`, decimal handling)
* Handling edge cases in user input
* String manipulation (`slice`, `endsWith`)
* DOM manipulation and dynamic updates
* Designing a responsive UI layout

---

## How to Run

1. Clone this repository

```
git clone https://github.com/your-username/calculator.git
```

2. Open `Calc.html` in your browser

---

## Note

This project uses `eval()` for evaluating expressions.
It works well for learning purposes but is **not recommended for production use** due to security risks.

---

## Future Improvements

* Add keyboard input support
* Improve UI/UX with animations
* Add calculation history
* Replace `eval()` with a custom parser
* Enhance responsiveness for mobile devices


---

## Acknowledgment

Built as part of my web development journey to strengthen JavaScript fundamentals and problem-solving skills.

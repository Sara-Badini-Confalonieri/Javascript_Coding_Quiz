const questions = [
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    choices: ["var x = 5;", "int x = 5;", "variable x = 5;", "let x = 5;"],
    correctAnswer: "let x = 5;"
  },
  {
    question: "Which function is used to display something in the browser console?",
    choices: ["log()", "print()", "display()", "console.log()"],
    correctAnswer: "console.log()"
  },
  {
    question: "What is the result of the expression: 3 + '3' in JavaScript?",
    choices: ["6", "33", "Error", "36"],
    correctAnswer: "33"
  },
  {
    question: "How do you check the type of a variable in JavaScript?",
    choices: ["typeOf x;", "typeof(x);", "checkType(x);", "type(x);"],
    correctAnswer: "typeof(x);"
  },
  {
    question: "What is the purpose of the 'return' statement in a function?",
    choices: ["To stop the function execution", "To return a value from the function", "To print a message", "To declare a variable"],
    correctAnswer: "To return a value from the function"
  },
]


// * A start button that when clicked a timer starts and the first question appears.
//   * Questions contain buttons for each answer.
//   * When answer is clicked, the next question appears
//   * If the answer clicked was incorrect then subtract time from the clock
// * The quiz should end when all questions are answered or the timer reaches 0.
//   * When the game ends, it should display their score and give the user the ability to save their initials and their score

// index.html

// - Define the questions and the choices and the answers, put it in a variable in questions.js file
// - Timer -> add click event listener to "start quiz" button and trigger the timer
// - Display first question
//      add click event listener to "start quiz" button
//      display the first question based on the questions that we have defined
//      hide the start screen
//      show questions screen and populate it with questions and the choices
// - Add click event listener to the choices div and check if the choice button is clicked
//      Check if the answer is correct
//          if its correct
//              display "correct answer" in feedback div
//              hide feedback div then display next question
//          if incorrect
//              subtract the timer
//              display "wrong answer" in feedback div
//              check the timer,
//                  if timer > 0. hide feedback div then display next question
//                  if timer <= 0, hide feedback div then go display "end-screen" screen and hide question screen
// continue.....

// highscores.html
// - Retrieve highscores from local storage
// - sort the scores from higher score to lower score
// - Display the highscores as a list
// - When the user click on "Clear Highscores", clear local storage

// How to use audio file
const correctAudio = new Audio('./assets/sfx/correct.wav');
const incorrectAudio = new Audio('./assets/sfx/incorrect.wav');

// Example to play the audio when start button is clicked
document.getElementById('start').addEventListener('click', function() {
    incorrectAudio.play();
});
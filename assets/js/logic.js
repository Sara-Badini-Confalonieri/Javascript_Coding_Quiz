document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start");
    const timerElement = document.getElementById("time");
    const questionTitleElement = document.getElementById("question-title");
    const choicesElement = document.getElementById("choices");
    const questionsArray = questions; 

    let timer;
    let currentQuestionIndex = 0;
    let timeRemaining;
    const penaltyTime = 10;

    function startQuiz() {
        document.getElementById("start-screen").classList.add("hide");
        document.getElementById("questions").classList.remove("hide");

        timeRemaining = questionsArray.length * 10;

        displayQuestion();
        startTimer();
    }

    function startTimer() {
        timer = setInterval(function () {
            if (timeRemaining <= 0) {
                timeRemaining = 0; 
                endQuiz();
            } else {
                timeRemaining--; 
                timerElement.textContent = timeRemaining;
            }
        }, 1000);
    }

    function displayQuestion() {
        const currentQuestion = questionsArray[currentQuestionIndex];

        questionTitleElement.textContent = currentQuestion.question;
        choicesElement.innerHTML = "";

        currentQuestion.choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.addEventListener("click", () => handleAnswerClick(index));
            choicesElement.appendChild(button);
        });
    }
    function showFeedback(text) {
        const feedbackElement = document.getElementById("feedback");
        feedbackElement.textContent = text;

        setTimeout(function () {
            feedbackElement.textContent = "";
        }, 1000);
    }
  function handleAnswerClick(choiceIndex) {
        const currentQuestion = questionsArray[currentQuestionIndex];

        if (currentQuestion.choices[choiceIndex] === currentQuestion.correctAnswer) {
            document.getElementById("feedback").classList.remove("hide");
            showFeedback("Correct!");
        } else {
            document.getElementById("feedback").classList.remove("hide");
            showFeedback("Incorrect! -10 seconds");
            timeRemaining -= penaltyTime;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questionsArray.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }
    startButton.addEventListener("click", startQuiz);
})
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
// const correctAudio = new Audio('./assets/sfx/correct.wav');
// const incorrectAudio = new Audio('./assets/sfx/incorrect.wav');

// // Example to play the audio when start button is clicked
// document.getElementById('start').addEventListener('click', function() {
//     incorrectAudio.play();
// });
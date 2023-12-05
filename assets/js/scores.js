document.addEventListener("DOMContentLoaded", function () {

    //Clear Highscore button
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", clearHighscores);
    displayHighscores();
});


//Display highscores
function displayHighscores() {
    var highscores = JSON.parse(localStorage.getItem("highscores"));

    // Sort highscores
    var highscoresList = document.getElementById("highscores");
    highscores.sort((a, b) => b.score - a.score);
    highscoresList.innerHTML = "";

    for (var i = 0; i < highscores.length; i++) {
        var scoreItem = document.createElement("li");
        scoreItem.textContent = highscores.initials + ": " + highscores.score;
        highscoresList.appendChild(scoreItem);
    }
}

// Clear highscores
function clearHighscores() {
    localStorage.removeItem("highscores");

    // Refresh the highscores list
    displayHighscores();
}
// Elements that have been dynamically created
var body = document.body;
var navEl = document.createElement("div");
var listEls = document.createElement("ul");
var highScoreLiEl = document.createElement("li");
var timerLiEl = document.createElement("li");
var h1El = document.createElement("h1");
var paraEl = document.createElement("p");
var startQuizBtn = document.createElement("button");

// Stored li elements in a variable
var listItems = document.getElementsByTagName("li");

// Set the text content of my elements
h1El.textContent = "Coding Quiz Challenge!";
highScoreLiEl.textContent = "View Highscores";
timerLiEl.textContent = "Time: ";
paraEl.textContent =
  "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startQuizBtn.textContent = "Start Quiz";

// Appended elements
// Nav path
body.appendChild(navEl);
navEl.appendChild(listEls);
listEls.appendChild(highScoreLiEl);
listEls.appendChild(timerLiEl);

// Main content path
body.appendChild(h1El);
body.appendChild(paraEl);
body.appendChild(startQuizBtn);
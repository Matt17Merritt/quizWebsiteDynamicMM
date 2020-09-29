// Elements that have been dynamically created
var body = document.body;
var navEl = document.createElement("div");
var listEls = document.createElement("ul");
var highScoreLiEl = document.createElement("li");
var timerLiEl = document.createElement("li");
var mainDivEl = document.createElement("div");
var h1ElCoding = document.createElement("h1");
var paraElIntro = document.createElement("p");
var startQuizBtn = document.createElement("button");

// Stored li elements in a variable
var listItems = document.getElementsByTagName("li");

// Set the text content of my elements
h1ElCoding.textContent = "Coding Quiz Challenge!";
highScoreLiEl.textContent = "View Highscores";
timerLiEl.textContent = "Time: ";
paraElIntro.textContent =
  "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startQuizBtn.textContent = "Start Quiz";

// Appended elements
// Nav path
body.appendChild(navEl);
navEl.appendChild(listEls);
listEls.appendChild(highScoreLiEl);
listEls.appendChild(timerLiEl);

// Main content path
body.appendChild(mainDivEl);
mainDivEl.appendChild(h1ElCoding);
h1ElCoding.appendChild(paraElIntro);
h1ElCoding.appendChild(startQuizBtn);

// Add classes to elements.
navEl.className += "nav-class";
listItems.className += "list-class"
listEls.className += "ul-class";
highScoreLiEl.className += "highscore-class";
timerLiEl.className += "timer-class";
mainDivEl.className += "mainDiv-class"
h1ElCoding.className += "h1ElCoding-class";
paraElIntro.className += "paraElIntro-class";
startQuizBtn.className += "startQuizBtn-class"


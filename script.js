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

// Global variables
var timeLeft = 75;
var timeInterval;
var score = 0;
var correct;
var currentQuestionIndex = 0;

// Set the text content of my elements
h1ElCoding.textContent = "Coding Quiz Challenge!";
highScoreLiEl.textContent = "View Highscores";
timerLiEl.textContent = "Time: " + timeLeft;
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
mainDivEl.appendChild(paraElIntro);
mainDivEl.appendChild(startQuizBtn);

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

// Global variables
var timeLeft = 75;
var timeInterval;
var score = 0;
var correct;
var currentQuestionIndex = 0;



// Quiz question object
var quizQuestions = [{
    question: "Commonly used data types DO NOT include:",
    choiceA: "1. strings",
    choiceB: "2. booleans",
    choiceC: "3. alerts",
    choiceD: "4. numbers",
    correctAnswer: "c"},
{
    question: "The condition in an if/else statement is enclosed within ________.",
    choiceA: "1. quotes",
    choiceB: "2. curly brackets",
    choiceC: "3. parentheses",
    choiceD: "4. square brackets",
    correctAnswer: "b"},
{
    question: "Arrays in JavaScript can be used to store ________.",
    choiceA: "1. numbers and strings",
    choiceB: "2. other arrays",
    choiceC: "3. booleans",
    choiceD: "4. all of the above",
    correctAnswer: "d"},
{
    question: "String values must be enclosed within ________ when being assigned to variables.",
    choiceA: "1. commas",
    choiceB: "2. curly brackets",
    choiceC: "3. quotes",
    choiceD: "4. parentheses",
    correctAnswer: "c"}, 
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "1. JavaScript",
    choiceB: "2. terminal/bash",
    choiceC: "3. for loops",
    choiceD: "4. console.log",
    correctAnswer: "d"}, 

];

console.log(quizQuestions[1]);
function hide (x) {
   x.style.display="none";

}


function show(x) {
    x.style.display="initial";
}

function correctAnswer (x) {
    if(x === quizQuestions[0].choiceC) {
        displayQuestion2;
    }
} 

function startQuiz() {
    hide(mainDivEl);
    displayQuestion1();
    console.log
    // Timer function
    timeInterval = setInterval(function() {
        timeLeft--;
        timerLiEl.textContent = "Time: " + timeLeft;
        
        if(timeLeft === 0) {
            clearInterval(timeInterval);
            show(mainDivEl);
        }
    },1000);
}


startQuizBtn.addEventListener("click" , startQuiz);



function displayQuestion1() {
    
    
    // creates the q and a elements
    var body = document.body;
    var questionEl = document.createElement("p");
    var answerEl1 = document.createElement("button");
    var answerEl2 = document.createElement("button");
    var answerEl3 = document.createElement("button");
    var answerEl4 = document.createElement("button");
    var listOfBtns = document.getElementsByTagName("button")
    // assigns the elements a class
    questionEl.className += "quest-class";
    answerEl1.className += "ans-class"
    answerEl2.className += "ans-class";
    answerEl3.className += "ans-class";
    answerEl4.className += "ans-class";
    
    // appends the elements to the body
    body.appendChild(questionEl);
    body.appendChild(answerEl1);
    body.appendChild(answerEl2);
    body.appendChild(answerEl3);
    body.appendChild(answerEl4);
    
    // fills in text from array of object
    questionEl.textContent = quizQuestions[0].question;
    answerEl1.textContent = quizQuestions[0].choiceA;
    answerEl2.textContent = quizQuestions[0].choiceB;
    answerEl3.textContent = quizQuestions[0].choiceC;
    answerEl4.textContent = quizQuestions[0].choiceD;

    answerEl1.addEventListener("click" , clicked2);
    answerEl2.addEventListener("click" ,clicked2);
    answerEl3.addEventListener("click" , clicked);
    answerEl4.addEventListener("click" ,clicked2);

    function clicked () {
        hide(mainDivEl);
        hide(questionEl);
        displayQuestion2();
    }
    function clicked2 () {
        hide(questionEl);
        hide(mainDivEl);
        timeLeft = timeLeft - 10;
        displayQuestion2();
    }
}

function displayQuestion2() {
    
    
    // creates the q and a elements
    var body = document.body
    var questionEl = document.createElement("p");
    var answerEl1 = document.createElement("button");
    var answerEl2 = document.createElement("button");
    var answerEl3 = document.createElement("button");
    var answerEl4 = document.createElement("button");
    
    // assigns the elements a class
    questionEl.className += "quest-class";
    answerEl1.className += "ans-class"
    answerEl2.className += "ans-class";
    answerEl3.className += "ans-class";
    answerEl4.className += "ans-class";
    
    // appends the elements to the body
    body.appendChild(questionEl);
    body.appendChild(answerEl1);
    body.appendChild(answerEl2);
    body.appendChild(answerEl3);
    body.appendChild(answerEl4);
    
    // fills in text from array of object
    questionEl.textContent = quizQuestions[1].question;
    answerEl1.textContent = quizQuestions[1].choiceA;
    answerEl2.textContent = quizQuestions[1].choiceB;
    answerEl3.textContent = quizQuestions[1].choiceC;
    answerEl4.textContent = quizQuestions[1].choiceD;

    
}

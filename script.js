// Elements that have been dynamically created

var body = document.body;
var navEl = document.createElement("div");
var listEl = document.createElement("ul");
var li1 = document.createElement("li");  
var li2 = document.createElement("li");

var h1El = document.createElement("h1");




// Stored li elements in a variable

var listItems = document.getElementsByTagName("li");

// Set the text content of my elements

h1El.textContent = "Coding Quiz Challenge!";
li1.textContent = "View Highscores";
li2.textContent = "Time: "

// Appended elements

body.appendChild(navEl);
navEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);

body.appendChild(h1El);
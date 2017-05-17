var colors = [];
var goal;
var resetbtn = document.querySelector("#reset");
var messsageDisplay = document.querySelector("#message");
var h1  = document.querySelector("h1");
var squares = document.querySelectorAll (".square");
var hardBtn = document.querySelector("#hard");
var easyBtn = document.querySelector("#easy");


resetColors();

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		if (this.style.background == goal) {
			messsageDisplay.textContent = "Correct!";
			h1.style.background = goal;
			resetbtn.textContent = "Play Again?"
			correct();
		} else {
			messsageDisplay.textContent = "Try Again";
			this.style.background = "#232323";
		}
	});
}

resetbtn.addEventListener("click", function() {
	resetColors();
	var goal = colors[getRandNum()];
	messsageDisplay.textContent = "";
});

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");

	easyMode();
	for (var i = 3; i < squares.length; i++) {
		squares[i].style.display = "none";
	}
	messsageDisplay.textContent = "";
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	for (var i = 3; i < squares.length; i++) {
		squares[i].style.display = "block";
	}
	resetColors();
	messsageDisplay.textContent = "";
});



function getRandColor () {
	return Math.ceil(Math.random() * (255 - 0));
}

function getRandNum () {
	var num = Math.ceil(Math.random() * (5 - 0));
	return num;
}

function correct () {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = goal;
	}
}

function resetColors () {
	h1.style.background = "steelblue";
	resetbtn.textContent = "New Colors";

	for (var i = 0; i < 6; i++) {
		colors[i] = "rgb(" + getRandColor() + ", "
		 + getRandColor()+", "+getRandColor()+")"
	}

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}

	goal = colors[getRandNum()];
	document.querySelector("#colorTitle").textContent = goal;
}

function easyMode () {
	h1.style.background = "steelblue";
	resetbtn.textContent = "New Colors";

	for (var i = 0; i < 3; i++) {
		colors[i] = "rgb(" + getRandColor() + ", "
		 + getRandColor()+", "+getRandColor()+")"
	}

	for (var i = 0; i < 3; i++) {
		squares[i].style.background = colors[i];
	}

	goal = colors[Math.ceil(Math.random() * (2 - 0))];
	document.querySelector("#colorTitle").textContent = goal;
}


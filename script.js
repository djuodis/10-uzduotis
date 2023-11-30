var numSquares = 6 
var colors = [] 
var pickedColor 
var squares = document.querySelectorAll(".square") 
var colorDisplay = document.getElementById("colorDisplay") 
var messageDisplay = document.getElementById("message") 
var h1 = document.querySelector("h1") 
var resetButton = document.querySelector("#reset") 
var modeButtons = document.querySelectorAll(".mode") 

init() 

function init() {
	setupButtons() 
	setupSquares() 
	reset() 
}

function setupButtons() {
	modeButtons.forEach(btn =>
		btn.addEventListener("click", function () {
			modeButtons.forEach(btn => btn.classList.remove("selected")) 
			this.classList.add("selected") 
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6 
			reset() 
		})
	) 

	resetButton.addEventListener("click", reset) 
}

function setupSquares() {
	squares.forEach(square =>
		square.addEventListener("click", function () {
			const clickedColor = this.style.backgroundColor 
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Teisingai!" 
				resetButton.textContent = "Žaisti vėl?" 
				changeColors(pickedColor) 
				removePointers() 
				h1.style.backgroundColor = pickedColor 
			} else {
				this.style.backgroundColor = "#232323" 
				this.classList.remove("squarePointer") 
				messageDisplay.textContent = "Bandyk iš naujo" 
			}
		})
	) 
}

function reset() {
	colors = generateRandomColors(numSquares) 
	pickedColor = pickColor() 
	colorDisplay.textContent = pickedColor 
	squares.forEach((square, index) => {
		if (colors[index]) {
			square.style.display = "block" 
			square.style.backgroundColor = colors[index] 
			square.classList.add("squarePointer") 
		} else {
			square.style.display = "none" 
		}
	}) 
	h1.style.backgroundColor = "steelblue" 
	resetButton.textContent = "New Colors" 
	messageDisplay.textContent = "" 
}

function changeColors(color) {
	squares.forEach(square => (square.style.backgroundColor = color)) 
}

function pickColor() {
	const random = Math.floor(Math.random() * colors.length) 
	return colors[random] 
}

function generateRandomColors(num) {
	return Array.from({ length: num }, randomColor) 
}

function randomColor() {
	const r = Math.floor(Math.random() * 256) 
	const g = Math.floor(Math.random() * 256) 
	const b = Math.floor(Math.random() * 256) 
	return `rgb(${r}, ${g}, ${b})` 
}

function removePointers() {
	squares.forEach(square => square.classList.remove("squarePointer")) 
}

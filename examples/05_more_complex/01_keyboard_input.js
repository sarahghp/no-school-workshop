// This one needs to be run in the browser!

// Declare default variable value
isInverted = 0;

// Define value on key press
document.addEventListener('keydown', () => {
	isInverted = 1 ;
});

// Return to default value after key press
document.addEventListener('keyup', () => {
	isInverted = 0 ;
});

// Call variable inside of an arrow function
// to update on each frame refresh

voronoi()
.color(.58, 1, .63)
.invert(() => isInverted)
.out()

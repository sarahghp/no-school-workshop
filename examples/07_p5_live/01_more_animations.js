let m = 0;
let x = 0;

function updateM () {
	m++;
}

function range (n) {
	return Array.from({length: n}, (_, i) => i);
}


function setup() {
	createCanvas(windowWidth, windowHeight)
	setInterval(updateM.bind(this), 500)

}

function draw() {
	clear()
	if (true) {
		stroke(0, 255, 230)
		range(second()).forEach(item => {
			strokeWeight(item / 10)
			line(0, 0 + (20 * item), width, 0 + (20 * item))
		})
	strokeWeight(1)
	}

	fill(255, 140, 0)
	x = lerp(x, width + 100, 0.01)

	if (x > width) {
		x = 0
	}
	ellipse(x, 300, 200)

	applyMatrix()
	fill(0, 255, 230)
	translate(200, -400)
	rotate(PI / 3.0)
	ellipse(x, 300, 200)
	resetMatrix()

  if (m % 2) {
    fill(0, 0, 200)
    ellipse(400, 400, 300)
  }

  if (!(second() % 2)) {
  	fill(400, 100, 100)
  	ellipse(600, 200, 100)
  }

}

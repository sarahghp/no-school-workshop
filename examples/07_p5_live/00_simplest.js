let m = 0;

function updateM () {
  m++;
}


function setup() {
  createCanvas(windowWidth, windowHeight)
  setInterval(updateM.bind(this), 500)

}

function draw() {
  clear()
  if (m % 2) {
  fill(0, 0, 200)
  ellipse(400, 400, 300)
  }

  // if (!(second() % 2)) {
  // 	fill(400, 100, 100)
  // 	ellipse(600, 200, 100)
  // }
}

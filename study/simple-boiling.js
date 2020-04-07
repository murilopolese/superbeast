let font, slider

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
	frameRate(30)
  createCanvas(600, 400);
	slider = createSlider(0, 30, 3, 0.1)
}

function draw() {
  background(0)
	fill(255)
	stroke(255)

  let points = font.textToPoints('g', width/2, height/2, 200, {
		sampleFactor: 0.25
	})

	beginShape()
	for (let i = 0; i < points.length; i++) {
		let point = points[i]
		vertex(
			point.x + random(slider.value()),
			point.y + random(slider.value()))
	}
	endShape()
}

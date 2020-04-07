let font, slider1, slider2

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
	frameRate(30)
  createCanvas(600, 400);
	slider1 = createSlider(0, 30, 1, 0.1)
	slider2 = createSlider(0, 30, 1, 0.1)
}

function draw() {
  background(0)
	fill('#35fdb2')
	stroke('#35fdb2')

	text(`${mouseX} ${mouseY}`, 10, 10)

  let points = font.textToPoints('g', 300, 200, 400, {
		sampleFactor: 0.25
	})
  let smaller_points = font.textToPoints('g', 304, 199, 390, {
		sampleFactor: 0.25
	})

	beginShape()
	for (let i = 1; i < points.length; i++) {
		if (i % 2 == 0) {
			let point = points[i%points.length]
			vertex(
				point.x + random(slider1.value()),
				point.y + random(slider1.value())
			)
		} else {
			let point = smaller_points[i%smaller_points.length]
			vertex(
				point.x + random(slider2.value()),
				point.y + random(slider2.value())
			)
		}
	}
	endShape()
}

let font, slider1, slider2, slider3, cursor

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
	frameRate(30)
  createCanvas(600, 400);
	cursor = createVector(width/2, height/2)
	slider1 = createSlider(0, 3, 1, 0.1)
	slider2 = createSlider(0, 3, 1, 0.1)
	slider3 = createSlider(0, 3, 1, 0.1)
}

function draw() {
  background(0)
	fill('#35fdb2')
	stroke('#35fdb2')

	cursor = createVector(
		lerp(cursor.x, mouseX+random(3), 0.1),
		lerp(cursor.y, mouseY+random(3), 0.1)
	)
	// point(cursor.x, cursor.y)

  let points = font.textToPoints('g', 250, 250, 410, {
		sampleFactor: 0.25
	})
  let smaller_points = font.textToPoints('g', 265, 240, 400, {
		sampleFactor: 0.25
	})

	beginShape()
	for (let i = 1; i < points.length; i++) {
		if (i % 2 == 0) {
			let point = points[i%points.length]
			let d = dist(point.x, point.y, cursor.x, cursor.y)
			d = Math.min(d, 100)
			d = Math.max(d, 20)
			let amp = map(d, 20, 100, 5, 1.3) * slider1.value()
			vertex(
				point.x + // Original point
				(amp/2) + (amp * Math.sin(radians( (i*17) + (millis()/(21*slider3.value())) ))) * // Amplitude
				Math.sin(radians( (i*(20*slider2.value())) + (millis()/10) )) // Frequency
				,
				point.y + // Original point
				(amp/2) + (amp * Math.sin( radians( (i*17) + (millis()/(21*slider3.value())) ) )) * // Amplitude
				Math.sin(radians( (i*(20*slider2.value())) + (millis()/10) )) // Frequency
			)
		} else {
			let point = smaller_points[i%smaller_points.length]
			vertex(
				point.x,
				point.y
			)
		}
	}
	endShape()
}

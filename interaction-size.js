let font, slider1, slider2, slider3, cursor
let points, smaller_points

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
	frameRate(30)
  createCanvas(600, 400);
	cursor = createVector(width/2, height/2)
	ellipseMode(CENTER)
	slider1 = createSlider(0.1, 3, 0.5, 0.1)
	slider2 = createSlider(0.1, 3, 0.5, 0.1)
	slider3 = createSlider(0.1, 3, 0.5, 0.1)
}

function draw() {
	// scale(2)
  background(0)
	fill('#35fdb2')
	stroke('#35fdb2')

	cursor = createVector(
		lerp(cursor.x, mouseX+random(3), 0.05),
		lerp(cursor.y, mouseY+random(3), 0.05)
	)
	// point(cursor.x, cursor.y)

  points = font.textToPoints('g', 250, 250, 410, {
		sampleFactor: 0.25
	})
  smaller_points = font.textToPoints('g', 265, 240, 400, {
		sampleFactor: 0.25
	})

	beginShape()
	for (let i = 1; i < points.length; i++) {
		if (i % 2 == 0) {
			let prevPoint = createVector(
				smaller_points[(i-1)%smaller_points.length].x,
				smaller_points[(i-1)%smaller_points.length].y,
			)
			let nextPoint = createVector(
				smaller_points[(i+1)%smaller_points.length].x,
				smaller_points[(i+1)%smaller_points.length].y
			)
			let point = createVector(
				points[i%points.length].x,
				points[i%points.length].y
			)
			let d = dist(point.x, point.y, cursor.x, cursor.y)
			d = Math.min(d, 100)
			d = Math.max(d, 20)
			let amp = map(d, 20, 100, 5, 1.3) * slider2.value()
			let grow = map(d, 20, 100, 2, 0.1) * slider1.value()

			let abVector = nextPoint.sub(prevPoint)
			let mediumPoint = prevPoint.add(abVector.div(2))

			let growthVector = point.sub(mediumPoint)
			growthVector.mult(grow + (slider3.value()*(grow/2)*sin(radians(millis()/20))))

			let growthPoint = mediumPoint.add(growthVector)

			vertex(
				growthPoint.x // Original point
				+ (amp/2) + (amp * Math.sin(radians( (i*17) + (millis()/21) ))) * // Amplitude
				Math.sin(radians( (i*20) + (millis()/10) )) // Frequency
				,
				growthPoint.y // Original point
				+ (amp/2) + (amp * Math.sin( radians( (i*17) + (millis()/21) ) )) * // Amplitude
				Math.sin(radians( (i*20) + (millis()/10) )) // Frequency
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
	// throw new Error('stop now')
}

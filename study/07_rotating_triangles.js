let img, json = {}, saveButton, clearButton

let maxDistance, cursor

let main_vertex = null
let hold_vertex = []
let triangles = []

function preload() {
	img = loadImage('logo_spikeless.png')
	json = loadJSON('triangles.json')
}

function setup() {
	createCanvas(img.width, img.height)
	maxDistance = sqrt(pow(width,2),pow(height,2))
	ellipseMode(CENTER)
	stroke('#35fdb2')
	fill('#35fdb2')
	saveButton = createButton('SAVE')
	clearButton = createButton('CLEAR')
	saveButton.mousePressed(() => saveTriangles(triangles))
	clearButton.mousePressed(() => triangles = [])
	cursor = createVector(
		mouseX, mouseY
	)
	triangles = json.triangles || []
}

function draw() {
	background(0)
	stroke('#35fdb2')
	fill('#35fdb2')
	push()
	cursor = createVector(
		lerp(cursor.x, mouseX, 0.2),
		lerp(cursor.y, mouseY, 0.2)
	)
	image(img, 0, 0, width, height)
	if (main_vertex) {
		if (hold_vertex.length == 0) {
			line(
				main_vertex.x, main_vertex.y,
				mouseX, mouseY
			)
		}
		if (hold_vertex.length == 1) {
			triangle(
				main_vertex.x, main_vertex.y,
				hold_vertex[0].x, hold_vertex[0].y,
				mouseX, mouseY
			)
		}
	}
	triangles.forEach(function(points, i) {
		let j = map(
			dist(cursor.x, cursor.y, points[1].x, points[1].y),
			0, maxDistance,
			1, 0
		)
		let d = dist(
			points[1].x, points[1].y,
			cursor.x, cursor.y
		)
		push()
		translate(points[1].x, points[1].y)
		rotate(radians(
			// Range of movement
			((j*3)) *
			sin(
				radians(
					10 * i
					+ (0.5*millis()*j) // phase
				)
			)
		))
		triangle(
			0, 0,
			points[0].x-points[1].x, points[0].y-points[1].y,
			points[2].x-points[1].x, points[2].y-points[1].y
		)
		pop()
	})
	pop()
}

function mouseClicked() {
	return;
	if (mouseX > width || mouseX < 0 || mouseY > height || mouseY < 0) {
		return
	}
	if (!main_vertex) {
		main_vertex = createVector(mouseX, mouseY)
	} else if (main_vertex) {
		hold_vertex.push( createVector(mouseX, mouseY) )
		if (hold_vertex.length == 2) {
			triangles.push( [main_vertex].concat(hold_vertex) )
			main_vertex = null
			hold_vertex = []
		}
	}
}

function saveTriangles(triangles) {
	localStorage.setItem(
		'triangles',
		JSON.stringify(
			triangles.map(
				points => points.map(p => ({ x: p.x, y: p.y }))
			)
		)
	)
}

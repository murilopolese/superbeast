let img, json = {}, saveButton, clearButton
let baseX = 1800, baseY = 550, shrink = 0.65
let maxDistance, cursor

let main_vertex = null
let hold_vertex = []
let triangles = []

function preload() {
	img = loadImage('beast_spikeless.png')
	json = loadJSON('triangles(1).json')
	// json = { triangles: JSON.parse(localStorage.getItem('triangles')) }
}

function setup() {
	angleMode(DEGREES)
	createCanvas(baseX*shrink, baseY*shrink)
	ellipseMode(CENTER)
	stroke('#35fdb2')
	fill('#35fdb2')
	triangles = json.triangles || []
	cursor = createVector(
		mouseX, mouseY
	)
}

function draw() {
	cursor = createVector(
		lerp(cursor.x, mouseX, 0.15),
		lerp(cursor.y, mouseY, 0.15)
	)
	background(0)
	image(img, 0, 0, width, height)
	push()
	scale(shrink)
	handleClick()
	drawTriangles()
	pop()
	// ellipse(cursor.x, cursor.y, 5, 5)
}

function drawTriangles() {
	triangles.forEach(function(points, i) {
		push()
		translate(points[1].x, points[1].y)
		let d = dist(cursor.x, cursor.y, points[0].x, points[0].y)
		// Slow waving
		let wlength = 10
		let frequency = map(d, 0, width, 0.1, 0.05)
		let amplitude = map(d, 0, width, 6, 2)
		let angle = amplitude * sin(
			(i * wlength ) + // phase
			(millis()) * frequency // frequency
		)
		rotate(angle)
		// stroke('#f00')
		// fill('#f00')
		// ellipse(
		// 	points[0].x-points[1].x, points[0].y-points[1].y,
		// 	5, 5
		// )
		stroke('#35fdb2')
		fill('#35fdb2')
		triangle(
			0, 0,
			points[0].x-points[1].x, points[0].y-points[1].y,
			points[2].x-points[1].x, points[2].y-points[1].y
		)
		pop()
	})
}

function handleClick() {
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
}

function mouseClicked() {
	return
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
	let mappedTriangles = triangles.map(
		points => points.map(p => ({ x: p.x, y: p.y }))
	)
	localStorage.setItem( 'triangles', JSON.stringify(mappedTriangles) )
	saveJSON({ triangles: mappedTriangles }, 'triangles.json')
}

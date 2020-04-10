let img, json = {},
	spikes = [], particles = [], floating = [],
	cursor, moving = 0 // Data
let container // HTML Element container
let baseX = 1800, baseY = 550 // Size of original file
let paddingX, paddingY
// Desired final width
let targetX = 700
let ratio = targetX / baseX
let targetY = baseY*ratio

let palette

function calculatePadding() {
	// Calculate padding to center logo
	paddingX = abs((windowWidth/2)-(targetX/2))
	paddingY = abs((windowHeight/2)-(targetY/2))
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	calculatePadding()
}

function preload() {
	img = loadImage('beast_spikeless.png')
	json = loadJSON('triangles(1).json')
}

function setup() {
	palette = {
		yellow: color('#fdfa38'),
		green: color('#35fab1'),
		pink: color('#fa28f7')
	}
	calculatePadding()
	// Put canvas inside container
	container = document.querySelector('#beastlogo')
	const canvas = createCanvas( windowWidth, windowHeight )
	canvas.parent(container)
	// Load / Init data
	const triangles = json.triangles || []
	spikes = triangles.map((triangle, i) => new Spike(triangle, i))
	cursor = createVector(0, 0)
	createParticles()
	createTriangles()
	// Processing settings
	angleMode(DEGREES)
	ellipseMode(CENTER)
}

function draw() {
	clear()
	drawBackground()
	if (width < targetX) return
	translate(paddingX, paddingY)
	if ( moving > 0 ) {
		moving--
	}
	if (moving) {
		cursor = createVector(
			lerp(cursor.x, mouseX-paddingX, 0.1),
			lerp(cursor.y, mouseY-paddingY, 0.1)
		)
	} else {
		cursor = createVector(
			lerp(cursor.x, (width*0.5+width*0.35*sin(millis()/18))-paddingX, 0.1),
			lerp(cursor.x, (height*0.5+height*0.1*cos(millis()/20))-paddingY 0.1)
		)
	}

	scale(ratio)
	image(img, 0, 0)
	spikes.forEach((spike) => {
		spike.update()
		spike.draw()
	})
}

function mouseMoved() {
	moving = 100
}

function drawBackground() {
	particles.forEach((particle) => {
		particle.update()
		particle.draw()
	})
	floating.forEach((triangle) => {
		triangle.update()
		triangle.draw()
	})
}

function createParticles() {
	for (let i = 0; i < height/10; i++) {
		particles.push(
			new Particle(
				random(0, width), random(0, height),
				random(2, 7), getRandomColor()
			)
		)
	}
}

function createTriangles() {
	for (let i = 0; i < 10; i++) {
		floating.push(
			new Triangle(
				random(0, width), random(0, height),
				random(15, 55), getRandomColor()
			)
		)
	}
}

function getRandomColor() {
	let colorNames = Object.keys(palette)
	let colorName = colorNames[
		parseInt( random(0, colorNames.length) )
	]
	return palette[colorName]
}

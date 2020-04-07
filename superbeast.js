let img, json = {}
let baseX = 1800, baseY = 550, targetX = 900, ratio
let spikes = []
let cursor, energy

function preload() {
	img = loadImage('beast_spikeless.png')
	json = loadJSON('triangles(1).json')
}

function setup() {
	// Calculate shink ratio
	ratio = targetX / baseX
	angleMode(DEGREES)
	ellipseMode(CENTER)
	createCanvas(targetX, baseY*ratio)
	stroke('#35fdb2')
	fill('#35fdb2')
	strokeWeight(2)
	const triangles = json.triangles || []
	spikes = triangles.map((triangle, i) => new Spike(triangle, i))
	cursor = createVector(
		width/2, height/2
	)
}

function draw() {
	energy += (pmouseX - mouseX + pmouseY - mouseY) * 20
	cursor = createVector(
		lerp(cursor.x, mouseX/ratio, 0.35),
		lerp(cursor.y, mouseY/ratio, 0.35)
	)
	background(0)
	push()
	scale(ratio)
	image(img, 0, 0)
	spikes.forEach(spike => spike.update())
	spikes.forEach(spike => spike.draw())
	pop()
	ellipse(
		map(cursor.x, 0, width/ratio, 0, width),
		map(cursor.y, 0, height/ratio, 0, height),
		2, 2
	)
	line(mouseX, mouseY, pmouseX, pmouseY);
}

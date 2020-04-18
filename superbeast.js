window.canvas = null
window.img = null
window.spikes = []
window.particles = []
window.floating = []
window.mouseCursor = {}
window.moving = 0 // Data
window.container // HTML Element container
window.baseX = 1800
window.baseY = 550 // Size of original file
window.paddingX = null
window.paddingY = null
// Desired final width
window.targetX = 700
window.ratio = targetX / baseX
window.targetY = baseY*ratio

window.palette = null

window.calculatePadding = function() {
	// Calculate padding to center logo
	window.paddingX = abs((windowWidth/2)-(targetX/2))
	window.paddingY = abs((windowHeight/2)-(targetY/2))
}

window.windowResized = function() {
	resizeCanvas(windowWidth, windowHeight);
	calculatePadding()
}

window.preload = function() {
	window.img = loadImage('https://superbeast.s3.eu-north-1.amazonaws.com/beast_spikeless_sm.png')
	if (!window.json) {
		window.json = loadJSON('data_sm.json')
	}
}

window.setup = function() {
	window.palette = {
		yellow: color('#fdfa38'),
		green: color('#35fab1'),
		pink: color('#fa28f7')
	}
	calculatePadding()
	// Put canvas inside container
	let loading = document.querySelector('#loading')
	window.container = document.querySelector('#beastlogo')
	window.container.innerHTML = ''
	window.canvas = createCanvas( windowWidth, windowHeight )
	window.canvas.parent(container)
	window.container.classList.add('fade-in')
	loading.classList.add('fade-out')
	// Load / Init data
	const triangles = json.triangles || []
	window.spikes = triangles.map((triangle, i) => new Spike(triangle, i))
	window.mouseCursor = createVector(0, 0)
	createParticles()
	createTriangles()
	// Processing settings
	frameRate(30)
	angleMode(DEGREES)
	ellipseMode(CENTER)
}

window.draw = function() {
	background(0)
	drawBackground()
	if (width < targetX) {
		ratio = (width*0.8) / targetX
		translate(
			(width/2) - (targetX * ratio / 2),
			(width/2) - map(width, targetX, 320, 120, height/6)
		)
		scale(ratio)
	} else {
		translate(paddingX, paddingY)
	}
	if ( moving > 0 ) {
		moving--
	}
	if (moving) {
		window.mouseCursor = createVector(
			lerp(mouseCursor.x, mouseX-paddingX, 0.1),
			lerp(mouseCursor.y, mouseY-paddingY, 0.1)
		)
	} else {
		window.mouseCursor = createVector(
			lerp(mouseCursor.x, (width*0.5+width*0.35*sin(millis()/18))-paddingX, 0.1),
			lerp(mouseCursor.y, (height*0.5+height*0.1*cos(millis()/20))-paddingY, 0.1)
		)
	}

	image(img, 0, 0)
	spikes.forEach((spike) => {
		spike.update()
		spike.draw()
	})
}

window.mouseMoved = function() {
	window.moving = 100
}

window.drawBackground = function() {
	particles.forEach((particle) => {
		particle.update()
		particle.draw()
	})
	floating.forEach((triangle) => {
		triangle.update()
		triangle.draw()
	})
}

window.createParticles = function() {
	for (let i = 0; i < 25; i++) {
		particles.push(
			new Particle(
				random(0, width), random(0, height),
				random(2, 7), getRandomColor()
			)
		)
	}
}

window.createTriangles = function() {
	for (let i = 0; i < 5; i++) {
		floating.push(
			new Triangle(
				random(0, width), random(0, height),
				random(15, 55), getRandomColor()
			)
		)
	}
}

window.getRandomColor = function() {
	let colorNames = Object.keys(palette)
	let colorName = colorNames[
		parseInt( random(0, colorNames.length) )
	]
	return palette[colorName]
}

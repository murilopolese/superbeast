function Particle(x, y, size, color) {
	this.position = createVector(x, y)
	this.size = size
	this.color = color

	this.vel = createVector(
		random(-1, 1), random(-1, 1)
	)

	this.update = function() {
		this.position.add(this.vel)
	}

	this.draw = function() {
		fill(this.color)
		ellipse(
			(width+this.position.x)%width, (height+this.position.y)%height,
			this.size, this.size
		)
	}
}

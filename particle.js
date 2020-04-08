function Particle(x, y, size, color) {
	this.position = createVector(x, y)
	this.size = size
	this.color = color

	this.vel = createVector(
		random(-1, 1), random(-1, 1)
	)

	this.update = function() {
		this.position.add(this.vel)
		this.position.x = ( this.position.x + width ) % width
		this.position.y = ( this.position.y + height ) % height
	}

	this.draw = function() {
		fill(this.color)
		stroke(this.color)
		ellipse(
			this.position.x, this.position.y,
			this.size, this.size
		)
	}
}

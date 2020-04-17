window.Triangle = function(x, y, size, color) {
	this.position = createVector(x, y)
	this.size = size
	this.color = color
	this.angle = random(360)
	this.vel = createVector(
		random(-2, 2),
		random(-2, 2),
	)
	this.avel = random(-1, 1)


	this.points = [
		createVector(x, y),
		createVector(-random(this.size)*0.3, this.size),
		createVector(random(this.size)*0.3, this.size),
	]

	this.update = function() {
		this.position = this.position.add(this.vel)
		this.position.x = ( this.position.x + width ) % width
		this.position.y = ( this.position.y + height ) % height
		this.angle += this.avel
	}

	this.draw = function() {
		fill(this.color)
		stroke(this.color)
		push()
		translate(this.position.x, this.position.y)
		rotate(this.angle)
		triangle(
			0, 0,
			this.points[1].x, this.points[1].y,
			this.points[2].x, this.points[2].y
		)
		pop()
	}
}

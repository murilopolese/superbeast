function Spike(points, index) {
	this.index = index
	this.distance = 250
	this.maxAngle = 20
	this.angle = 0
	this.size = 1
	this.spike = createVector(
		points[0].x-points[1].x,
		points[0].y-points[1].y
	)
	this.axis = createVector(
		points[1].x, points[1].y
	)
	this.base = createVector(
		points[2].x-points[1].x,
		points[2].y-points[1].y
	)

	this.update = function() {
		let d = map(
			min(dist(cursor.x, cursor.y, this.axis.x, this.axis.y), this.distance),
			0, this.distance,
			1, 0
		)
		this.angle = d * (
			( this.maxAngle/2 ) + ( this.maxAngle * sin( (this.index*10) + millis()*2 ) )
		) * 0.5
		this.size = map(d, 0, 1, 0.9, 2.5)
	}

	this.draw = function() {
		push()
		translate(this.axis.x, this.axis.y)
		// Vector from second point (axis) to first (spike)
		rotate(-this.angle)
		let spike = this.spike.copy()
		spike.mult(this.size)
		triangle(
			0, 0, // Axis
			spike.x, spike.y,
			this.base.x, this.base.y
		)
		pop()
	}

}

function Spike(points, index) {
	this.index = index // this will be the spike's "phase"
	this.distance = 120 // detection distance
	this.maxAngle = 15 // Maximum angle range
	this.angle = 0
	this.size = 1
	this.spike = createVector( // Vector from axis to tip (relative)
		points[0].x-points[1].x,
		points[0].y-points[1].y
	)
	this.axis = createVector( // Absolute position of axis
		points[1].x, points[1].y
	)
	this.base = createVector( // Vector from axis to end of triangle (relative)
		points[2].x-points[1].x,
		points[2].y-points[1].y
	)

	this.update = function() {
		// // DEBUG: See where is the cursor when computing
		// push()
		// ellipse(cursor.x/ratio, cursor.y/ratio, 20, 20)
		// pop()
		// Mapping the mouse position to a meaningful value for the animation
		let d = map(
			min( // Never be bigger than max distance
				dist(
					cursor.x, cursor.y,
					this.axis.x, this.axis.y // Distance to the "base" of spike
				),
				this.distance
			),
			0, this.distance, // Maximum input will be never more than max distance
			1, 0.05 // Normalise and invert proportionality avoiding zeros
		)
		// Play 2 different "animations"
			this.angle =
			(
				d * (
					( this.maxAngle/2 ) + ( this.maxAngle * sin( (this.index*40) + millis() ) )
				)
			)
			// +
			// (
			// 	(1-d) *
			// 	( this.maxAngle/2 ) + ( this.maxAngle * sin( (this.index*40) + millis()/8 ) )
			// )
		this.size = map(d, 0, 1, 0.4, 2)
	}

	this.draw = function() {
		let spike = this.spike.copy().mult(this.size)
		spike.rotate(-this.angle)
		push()
		translate(this.axis.x, this.axis.y)
		// rotate(-this.angle)
		strokeWeight(2)
		stroke(palette.green)
		fill(palette.green)
		triangle(
			0, 0, // Axis
			spike.x, spike.y,
			this.base.x, this.base.y
		)
		pop()
	}

}

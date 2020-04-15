const fs = require('fs')
const ratio = 0.388888888888889

const data = require('./data.json')
const converted = data.triangles.map((triangle) => {
	return triangle.map((point) => {
		return {
			x: point.x * ratio,
			y: point.y * ratio
		}
	})
})

fs.writeFileSync('data_sm.json', JSON.stringify({triangles: converted}, null, 1))

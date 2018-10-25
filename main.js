
// Constructor function
function Circle(radius) {
	// this reference the object is executing this piece of code
	this.radius = radius;
	let defaultLocation = { x: 1, y: 0 };

	this.getDefaultLocation = function () {
		return getDefaultLocation;
	}

	this.draw = function () {
		console.log('draw from Constructor Function');
	}

	Object.defineProperty(this, 'defaultLocation', {
		get: function () {
			return defaultLocation;
		},
		set: function (value) {
			// code some validation
			if (!value.x || !value.y) {
				throw new Error('Invalid location');
			}
			defaultLocation = value;
		}
	});

	// the return is implicit in the new Keyword when circle is created
}

const circle = new Circle(1);
circle.defaultLocation;
circle.draw();
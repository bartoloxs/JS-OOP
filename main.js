// object literal sintax
// const circle = {

// 	// properties
// 	radius: 1,
// 	location: {
// 		x: 1,
// 		y: 1
// 	},

// 	// Method (logic)
// 	draw: function () {
// 		console.log('draw');
// 	}
// };



// To avoid to duplicate code, we can use factories
function createCircle(radius) {
	return {
		// properties
		radius,
		location: {
			x: 1,
			y: 1
		},
		draw: function () {
			console.log('draw from factory');
		}
	};
}

const circle = createCircle(1);
circle.draw();


// Constructor function
function Circle(radius) {
	// this reference the object is executing this piece of code
	this.radius = radius;
	this.draw = function () {
		console.log('draw from Constructor Function');
	}

	// the return is implicit in the new Keyword when circle is created
}

const another = new Circle(1);

another.draw();

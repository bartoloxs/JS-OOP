function StopWatch() {
	let startTime = 0;
	let duration = 0;
	let running = false;

	this.start = function () {
		if (running) {
			throw new Error('Already running');
		}
		running = true;
		startTime = new Date();
	}

	this.stop = function () {
		if (!running) {
			throw new Error('Already stopped');
		}
		running = false;
		duration = duration + ((new Date().getTime() - startTime.getTime()) / 1000);
		console.log(duration);
	}

	this.reset = function () {
		startTime = 0;
		duration = 0;
		running = false;
	}

	Object.defineProperty(this, 'duration', {
		get: function () {
			return running ? (new Date().getTime() - startTime.getTime()) / 1000 : duration;
		}
	})
}
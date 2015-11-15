var Babysitter = require('./app.js');

describe('Babysitter nightly charge calculator', function() {
	var babysitter = new Babysitter();

	it('One hour of work from 5pm to 6pm', function() {
		var result = babysitter.calculate(17,18); // military time
		expect(result).toEqual(12);
	});
});
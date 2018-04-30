function largestOfFour (arr) {

	return Array.from(arr.map(function (val) {

		return reduceToMax(val);
	}));

}

function reduceToMax (arr) {

	return arr.reduce(function(a, b) {

		return Math.max(a, b);
	});
}



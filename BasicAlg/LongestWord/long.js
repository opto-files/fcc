function findLongestWord (string) {

	return sortByLength(split(string))[0].length;
}

function split (string) {

	return string.split(' ');
}

function sortByLength (arr) {

	return arr.sort(function (a, b) {

		return b.length - a.length;
	});

}

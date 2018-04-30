function titleCase (string) {
	
	return upperArray(splitLower(string)).join(' ');
}

function splitLower (string) {

	return string.toLowerCase().split(" ");

}

function upperCaseChar (string) {
	
	return string.charAt(0).toUpperCase() + string.slice(1);

}

function upperArray (arr) {

	for (i = 0; i < arr.length; i++) {

		arr[i] = upperCaseChar(arr[i]);

	}

	return arr;
}

function titleCase (string) {
	
	return upperArray(splitLower(string)).join(' ');
}

function splitLower (string) {

	return string.toLowerCase().split(" ");

}


function upperArray (arr) {

	return arr.map(function (string) {

		return string.charAt(0).toUpperCase() + string.slice(1);

	});


}

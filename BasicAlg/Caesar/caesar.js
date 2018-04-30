function rot13 (str) {
	
	var out = ""

	for (i = 0; i < str.length; i++) {

		if (isLetter(str[i])) {
			console.log(str[i] + " is a letter");
			out += convert(str[i]);
		} else {
		
		console.log(str[i] + " isn't a letter");
		out += str[i]
		
		}
	}

	return out;
}

function isLetter(str) {

	return str.match(/[a-z]/gi);
}

function convert (str) {
	
	if (str.charCodeAt(0) >= 78) {
	
		return String.fromCharCode(str.charCodeAt(0) - 13);
	
	} else {

		return String.fromCharCode(str.charCodeAt(0) + 13);
	}
}

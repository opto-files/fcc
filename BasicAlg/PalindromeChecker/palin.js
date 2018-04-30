function remNonAlphaNum (string) {

	var re = /[\W_]/gi;
	return string.replace(re, '');

}

function reverseString (string) {

	return string.split('').reverse().join('');

}

function processString (string) {

	return reverseString(remNonAlphaNum(string)).toLowerCase();

}

function palindrome (string) {

	if (processString(string) == remNonAlphaNum(string).toLowerCase()) {

		return true;
	
	} else {

		return false;

	}
}


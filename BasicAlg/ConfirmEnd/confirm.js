function confirmEnding (string, test) {

	if ((string.substr(-1 * test.length)) === test) {

		return true;
	} else {

		return false;

	}
	
}

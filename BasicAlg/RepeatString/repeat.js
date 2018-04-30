function repeatStringNumTimes(str, num) {

	if (num > 0) {

		return Array(num + 1).join(str);
	} else { return "" }
}

function truncateString(str, lim) {

	if (lim < 4 && str.length > lim) {

		return str.slice(0, lim) + "...";
	
	} 
	
	else if (lim > 3 && str.length > lim + 3) {

		return str.slice(0, lim - 3) + "..."
	}

}

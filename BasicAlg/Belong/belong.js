function getIndexToIns (arr, num) {
	
	arr.sort(function(a,b) { return a - b });

	console.log(arr);

	for(i = 0; i < arr.length; i++) {
		if(arr[i] >= num) {

			return i;
		
		}
	}

	return arr.length

}



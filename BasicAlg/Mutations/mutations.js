function mutation(arr) {

	var test = true;
	
	lower(arr);

	console.log(arr);

	for (i = 0; i < arr[1].length; i++){

		if(arr[0].indexOf(arr[1][i]) == -1) {

			test = false;
		}
	}

	return test;
}


function lower (arr) {

	for(i = 0; i < arr.length; i++) {

		arr[i] = arr[i].toLowerCase();
	}
}

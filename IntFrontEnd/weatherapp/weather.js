$(document).ready( function() {
	
	$(document).on('click', '#fah', function() { 
		toFahrenheit(); 
	});

	$(document).on('click', '#celsius', function() { 
		toCelsius(); 
	});
	navigator.geolocation.getCurrentPosition(getStats);	
	initStats(dataObj);

});



function getStats(pos) {

	var link = "https://fcc-weather-api.glitch.me/api/current?lon=" + pos.coords.longitude + "&lat=" + pos.coords.latitude;
	$.ajax ({

		url: link,

		success: function(data) {
		
			initStats(data);
			window.dataObj = data;
			
		}

	})}

function initStats(data) {
			
			$('#town').html(data.name);
			$('#temp').html(Math.floor(data.main.temp) + "&#176C");
			$('#weather').html(data.weather[0].main);
			IconGen(data.weather[0].main);
			
}

function IconGen(state) {

	switch(state) {

	case 'Clear':
		$("#weatherIcon").html("<i class=\"wi wi-day-sunny\"></i>");
			break;
	case 'Rain':
		$("#weatherIcon").html("<i class=\"wi wi-rain\"></i>");
			break;
	case 'Clouds':
		$("#weatherIcon").html("<i class=\"wi wi-cloudy\"></i>");
			break;

	case 'Drizzle':
		$("#weatherIcon").html("<i class=\"wi wi-showers\"></i>");
			break;
	
	case 'Snow':
		$("#weatherIcon").html("<i class=\"wi wi-snow\"></i>");
			break;
	case 'Thunderstorm':
		$("#weatherIcon").html("<i class=\"wi wi-thunderstorm\"></i>");
			break;
	}

}

function toFahrenheit() {
	var temp = dataObj.main.temp;
	var fah = Math.floor(temp * (9 / 5) + 32);
	$('#temp').html(fah + "&#176F");
}

function toCelsius() {

	$('#temp').html(Math.floor(dataObj.main.temp) + "&#176C");
}

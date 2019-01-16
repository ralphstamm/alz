<script type="text/javascript">
  
 try {
  window.weatherapi = function (){
 	 var apiKey = '97de2ca02db5147d9b274bba9f999c56'; 	 
 	 window.jQuery.get(
 	  	"https://api.openweathermap.org/data/2.5/weather?q=" 
    	 + {{city}} 
    	 + "," 
    	 + {{country}} 
    	 + "&units=metric"
    	 + "&APPID=" 
    	 + apiKey, 
    	 function(data) {
  				var weather = data.weather[0].main;
  				var temperature = data.main.temp;
    			var description = data.weather[0].description;
    			var pressure = data.main.pressure;
    			var humidity = data.main.humidity;
    			var clouds = data.clouds.all;
    			var rain = data.rain;
    			var snow = data.snow;
    			var wind = data.wind.speed;
   				window.dataLayer.push ({
      			'event':'weatherDone',
      			'weather':weather,
      			'temperature':temperature,
      			'description':description,
      			'pressure':pressure,
      			'humidity':humidity,
      			'clouds':clouds,
      			'rain':rain,
      			'snow':snow,
      			'wind':wind});
  			},"json");
 };
(function (w, d, s) {
	if (typeof window.jQuery === 'undefined') {
    var f = d.getElementsByTagName(s)[0],j = d.createElement(s);
    j.onload=weatherapi;
    j.src ='https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js';
   	f.parentNode.insertBefore(j, f);
  }else{weatherapi();}
})(window, document, 'script');
  
  } catch(e) {
    
  dataLayer.push({
    'event' : 'Error',
    'exceptionDescription' : e.message,
    'exceptionFatal' : true
  });
}
  
  
</script>

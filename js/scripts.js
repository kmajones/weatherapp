$(document).ready(function(){
  
//Check Geo-location - May not use this, need to decide. 
// Browser support geolocation?  
  if (navigator.geolocation) {
    // Yes! Show button
    $('.getGeolocation').show();
   /* console.log('yes')*/
  } else {
    // No. Hide button
    $('.getGeolocation').hide();
  }

// 2. Get Geolocation & return Simple Weather
$(document).ready(function() {
  
    navigator.geolocation.getCurrentPosition(function(position) {
    //load weather using your lat/lng coordinates. See _loadWeather()_ below
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
    // See latitute & longitude. Note, wait a few seconds
    console.log(position.coords.latitude+','+position.coords.longitude);
  });
  
});
// 3. Wrap SimpleWeather in a function called _loadWeather()
var loadWeather = function(location) {
    
    $.simpleWeather({
    location: location,
    
    // Get _weather_ object
    success: function(weather) {
      
      
      // Output to hooks in HTML
      $(' .weather-temp').text(weather.temp+weather.units.temp);
      $(' .city').text(weather.city+', '+weather.region);
      $(' .description').text(weather.currently);  
       $('.weather-icon').html('<img src="img/'+weather.code+'.svg">');
      
      $(' .high').text(weather.high+weather.units.temp+' ');
      $(' .low').text(weather.low+weather.units.temp);

      $(' .tomtemp').text(weather.forecast[1].high+weather.units.temp);
      $('.tomcurrent').text(weather.forecast[1].text);  
      $('.tomimage').html('<img src="img/'+weather.forecast[1].code+'.svg">');
      $(' .tomhigh').text(weather.forecast[1].high+weather.units.temp+' ');
      $(' .tomlow').text(weather.forecast[1].high+weather.units.temp);
      
      // See console for _weather_ object
      console.log(weather);
    
      
    }
  
  });
    
}; // end of _loadWeather()_ function
  
  //Enter Zip

// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/

// On click button, get zip, then run Simple Weather
$('button').on('click', function() {
  
  // 1. Get & store entered zipcode
  var zipcode = $('#getWeather').val();
  
  // 2. Pass weather into _simpleWeather()_ object
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      
      // Output to hooks in HTML
      $(' .weather-temp').text(weather.temp+weather.units.temp);
      $(' .city').text(weather.city+', '+weather.region);
      $(' .description').text(weather.currently);  
       $('.weather-icon').html('<img src="img/'+weather.code+'.svg">');
      
      $(' .high').text(weather.high+weather.units.temp+' ');
      $(' .low').text(weather.low+weather.units.temp);

      $(' .tomtemp').text(weather.forecast[1].high+weather.units.temp);
      $('.tomcurrent').text(weather.forecast[1].text);  
      $('.tomimage').html('<img src="img/'+weather.forecast[1].code+'.svg">');
      $(' .tomhigh').text(weather.forecast[1].high+weather.units.temp+' ');
      $(' .tomlow').text(weather.forecast[1].high+weather.units.temp);
      
      
      // See console for all properties of object
      console.log(weather);
      
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // 3. Reset input value
  $('#getWeather').val('');
  
});

//Ends doc load- DO NOT DELETE THIS ON ACCIDENT, you goof   
 }); 
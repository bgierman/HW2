
//let getWeather = function() {
  //let latitude = '41.8781';
  //let longitude = '-87.6298';
  //let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  //openweathermap_api_url += 'lat=' + latitude
  //openweathermap_api_url += '&lon=' + longitude
  //openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'

  let link = document.getElementById("get_forecast")
  link.addEventListener("click", function(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentlocation);
  });

let currentlocation = function(findme) {
  console.info(findme)
  let div = document.getElementById("get_forecast");
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + findme.coords.latitude
  openweathermap_api_url += '&lon=' + findme.coords.longitude
  openweathermap_api_url += '&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'

  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError)
  };

let convertToJSON = function(change) {
  return change.json();
  }

let updateWeather = function(weather) {
  console.debug(weather)
  city = weather.name;
  document.getElementById("city").innerHTML = city
  temp = weather.main.temp;
  document.getElementById("temperature").innerHTML = 'It is ' + temp + ' degrees outside.'
  icon=weather.weather[0].icon
  document.getElementById("image").src = 'http://openweathermap.org/img/w/' + icon + '.png'
};

let displayError = function(error) {
  console.debug(error);
  window.alert("Sorry, something went wrong.");
}

// HINT:
// Weather icon example: http://openweathermap.org/img/w/10d.png
                      //http://openweathermap.org/img/w/01d.png - Sunny
                      //http://openweathermap.org/img/w/02d.png - Mostly Sunny
                      //http://openweathermap.org/img/w/03d.png - Cloudy
                      //http://openweathermap.org/img/w/04d.png - Dark Clouds
                      //http://openweathermap.org/img/w/09d.png - Rain
                      //http://openweathermap.org/img/w/10d.png - Sun Shower
                      //http://openweathermap.org/img/w/11d.png - Thunderstorm
                      //http://openweathermap.org/img/w/13d.png - Snow
// The very last part ('10d.png') can change based on the current conditions.

// This is my API key
let apiKey = "&units=imperial&cnt=7&appid=e222da09846714641d1de2e70cf4f020";
//grabing the text from the input box
var searchBtn = $('#add-city');




var cityArry = [];

// code below puts the user input into the main dashboard
$('#searchBtn').click(function () {
  event.preventDefault()
  var city = $('#cityTerm').val();
  $('#cityTerm').val("");

  const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    console.log(queryUrl)
    //below i have grouped the current city and weather data below
    {
    var cityToday = response.name
    $('.currentCity').text(cityToday)
    var tempToday = response.main.temp
    $('#temperature').text(tempToday)
    var humidityToday = response.main.humidity
    $('#humidity').text(humidityToday)
    var windSpeedToday = response.wind.speed
    $('#windSpeed').text(windSpeedToday)
    var uvIndexToday =
     $('.uvIndex').text(uvIndexToday)
    }
  })
  var queryUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey;
  $.ajax({
    url: queryUrl2,
    method: "GET"
  }).then(function(data) {
    console.log(queryUrl2)

    // below is the list of days and times from now
    {
    var daycast1= data.list[0].dt_txt;
    $('#day1').text(daycast1);
    var daycast2= data.list[1].dt_txt;
    $('#day2').text(daycast2);
    var daycast3= data.list[2].dt_txt;
    $('#day3').text(daycast3);
    var daycast4= data.list[3].dt_txt;
    $('#day4').text(daycast4);
    var daycast5= data.list[4].dt_txt;
    $('#day5').text(daycast5);
    }
    // below is the 15 hour forecast of temp
    {
      var temperatureCast1= data.list[0].main.humidity;
      $('#temperature1').text(temperatureCast1);
      var temperatureCast2= data.list[1].main.humidity;
      $('#temperature2').text(temperatureCast2);
      var temperatureCast3= data.list[2].main.humidity;
      $('#temperature3').text(temperatureCast3);
      var temperatureCast4= data.list[3].main.humidity;
      $('#temperature4').text(temperatureCast4);
      var temperatureCast5= data.list[4].main.humidity;
      $('#temperature5').text(temperatureCast5);
    }
    // below is the 15 hour forecast of humidity
    {
      var humidityCast1= data.list[0].main.temp;
      $('#humidity1').text(humidityCast1);
      var humidityCast2= data.list[1].main.temp;
      $('#humidity2').text(humidityCast2);
      var humidityCast3= data.list[2].main.temp;
      $('#humidity3').text(humidityCast3);
      var humidityCast4= data.list[3].main.temp;
      $('#humidity4').text(humidityCast4);
      var humidityCast5= data.list[4].main.temp;
      $('#humidity5').text(humidityCast5);
    }
    //below is the 15 hour forecast wind speed
    {
      var windSpeedCast1= data.list[0].wind.speed;
      $('#windSpeed1').text(windSpeedCast1);
      var windSpeedCast2= data.list[1].wind.speed;
      $('#windSpeed2').text(windSpeedCast2);
      var windSpeedCast3= data.list[2].wind.speed;
      $('#windSpeed3').text(windSpeedCast3);
      var windSpeedCast4= data.list[3].wind.speed;
      $('#windSpeed4').text(windSpeedCast4);
      var windSpeedCast5= data.list[4].wind.speed;
      $('#windSpeed5').text(windSpeedCast5);
    }
      console.log(data)
  })
}
)





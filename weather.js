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
  //  var tempToday1 = data.list[0].main[0]
  //  $('.temperature1').text(tempToday1)
  //  var humidityToday1 = data.list[0].humidity
  //  $('.humidity1').text(humidityToday)
  //  var windSpeedToday1 = data.list[0].wind.speed
  //  $('.windSpeed1').text(windSpeedToday1)
  //  var uvIndexToday1 =
  //    $('.uvIndex1').text(uvIndexToday1)
  //  
      console.log(data)
  })
}
)





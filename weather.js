// This is my API key
let apiKey = "&units=imperial&appid=e222da09846714641d1de2e70cf4f020";
//grabing the text from the input box
var searchBtn = $('#add-city');



var searchHistory = $('.cityHistory');
var iconEl = $('.weathericon');
var tody = $('.currentDate');
var cardRow = $('.card-row')
var cityNameEl = $('.cityName')
var currentDateEl = $('.currentDate')
var citys = [];
let city = $('#cityTerm').val()


// work on the the JSON local storage 

//$.getJSON(queryURL,function(data){
//console.log(data);
//})


$('#cityTerm').keypress(function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $('#SearchBtn').click();

    }
});

$('#searchBtn').click(function () {
    city = $('#cityTerm').val();
    $('#cityTerm').val("");

    const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
        })
        .then(function (response) {

            console.log(response)

            console.log(response.name)
            console.log(response.weather[0].icon)
            let tempF = (response.main.temp - 273.15) * 1.80 + 32;
            console.log(Math.floor(tempF))

            console.log(response.main.humidity)

            console.log(response.wind.speed)

            getCurrentConditions(response);
            getCurrentForecast(response);
            makeList();
        })

})

function displayCityInfo() {

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        $('#buttons-view').text(JSON.stringify(response));
    })

}



function renderCityBtn() {
    $('#buttons-view').empty(); // important to stop buttons from repeating
    for (var i = 0; i < citys.length; i++); {
        var cityBtn = $('<button>');
        cityBtn.addClass("city");
        cityBtn.attr("city-name", citys[i]);
        cityBtn.text(citys[i]);
        $('#buttons-view').append(cityBtn);
    }
}




$(document).on('click', '.city', displayCityInfo);
renderCityBtn();



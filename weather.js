var today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
var today = mm + '/' + dd + '/' + yyyy;
// This is my API key
let apiKey = "5e329d9e34b0e4196b874d9df878fa73";
//grabing the text from the input box
var city = $('.city-input').val();
var searchBtn = $('#add-city');

var searchHistory = $('.cityHistory');
var iconEl = $('.weathericon');
var tody = $('.currentDate');
var cardRow = $('.card-row')
var cityNameEl = $('.cityName')
var currentDateEl = $('.currentDate') 
var citys = [];



// work on the the JSON local storage 




function renderCityBtn() {
    $('#buttons-view').empty(); // important to stop buttons from repeating
    for (var i = 0; i < citys.length; i++); {
        var cityArry = citys[i]
        
        cityArry.addClass('city','btn btn-primary'); // added a data-atribute
        cityArry.attr('city-name', citys[i]);//provided the intial button text
        cityArry.text(citys[i]);//added the button to the HTML
        $('#buttons-view').append(cityArry);
    }
}
// the function handles events where one button is clicked
searchBtn.click(function(event) {
    event.preventDefault();
    if(city.val()=== ""){
        alert("Please enter a city")
    }
    searchBtn
    // grabs the input from the textbox
    citys.push(city);// the city from the textbox is then added to the array
    renderCityBtn();// handles the processing of the city array
})



// this the urls needed to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=5e329d9e34b0e4196b874d9df878fa73" + "&units=metric";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    $('.temp').text("temperture", response)
})
renderCityBtn();
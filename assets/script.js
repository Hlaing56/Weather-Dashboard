var date = moment().format("M/D/YY");
var dates = [0, moment().add(1, 'days').format("M/D/YY"), moment().add(2, 'days').format("M/D/YY"), moment().add(3, 'days').format("M/D/YY"), moment().add(4, 'days').format("M/D/YY"), moment().add(5, 'days').format("M/D/YY")];
var statArr = [0,7,15,23,31,39];
var cup = document.querySelector(".cup");

function search(city){
    document.querySelector("#infoBox").innerHTML = "";

    fetch('https://api.openweathermap.org/geo/1.0/direct?q='+city+'&appid=40d5443567bb7557b36399e8bdcca171')
    .then(function(coordinates) {
        return coordinates.json();
    }).then(function(coordinates) {
        var lat = coordinates[0].lat;
        var lon = coordinates[0].lon;
        
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+ lat +'&lon='+ lon +'&exclude=hourly,minutely&appid=40d5443567bb7557b36399e8bdcca171&units=imperial')
        .then(function(response) {
            return response.json();
        }).then(function(response) {
            var infoBox = document.querySelector("#infoBox");

            var wet = document.createElement("div");
            wet.setAttribute('class', 'border border-dark corn p-2');

            infoBox.append(wet);
                
            wet.innerHTML = '<h2 id=moo>' + city + ' (' + date + ')' + '</h2>';

            var iconUrl = `http://openweathermap.org/img/wn/${response.current.weather[0].icon}.png`;

            var moo = document.querySelector("#moo");    
            var weatherIcon = document.createElement('img');
            weatherIcon.setAttribute('src', iconUrl);
            moo.append(weatherIcon);

            var corn = document.querySelector(".corn");   

            var stats = document.createElement("div");
            stats.setAttribute('class', 'stats');

            stats.innerHTML = '<p id=uv >'+'Temp: ' + response.current.temp + '&#8457;' 
            + '<br>' + 'Wind: ' + response.current.wind_speed + ' MPH'
            + '<br>' + 'Humidity: ' + response.current.humidity + '%'
            + '<br>' + 'UV Index: '; 

            corn.append(stats);

            var uv = document.querySelector("#uv");
            var uvi = document.createElement("div");
            
            uvi.setAttribute('class', 'vio');
            uvi.setAttribute('id', 'milk');
            uvi.innerHTML = response.current.uvi;

            uv.append(uvi);

            if(uvi.innerHTML == 0 || uvi.innerHTML < 3){
                $('#milk').addClass("low");
            } else if (uvi.innerHTML < 6){
                $('#milk').addClass("medium");
            } else {
                $('#milk').addClass("high");
            }

            var five = document.createElement("div");
            five.setAttribute('class', 'container');
            five.innerHTML = '<h4 class="mt-2 row"> 5-Day Forcast:</h4>';
            

            infoBox.append(five);

            var fiveDay = document.createElement("div");
            fiveDay.setAttribute('class', 'row text-light');
            five.append(fiveDay);
    
            for( var i = 1; i<6; i++ ) {
                var dayNum = "day" + i;
                dayNum = document.createElement("div");
                dayNum.setAttribute('class', 'card col-2 bg-dark');
                dayNum.innerHTML = '<h5 class="mt-2">' + dates[i] + '</h5>';
                var iconNum = "icon" + i;
                iconNum = `http://openweathermap.org/img/wn/${response.daily[i].weather[0].icon}.png`;
                var weatherIcon = document.createElement('img');
                weatherIcon.setAttribute('src', iconNum);
                dayNum.append(weatherIcon);
    
                var statsNum = "stats" + i;
                statsNum = document.createElement("div");
                statsNum.setAttribute('class', 'stats');
    
                statsNum.innerHTML = 'Temp: ' + response.daily[i].temp.day + '&#8457;'
                + '<br>' + 'Wind: ' + response.daily[i].wind_speed + ' MPH'
                + '<br>' + 'Humidity: ' + response.daily[i].humidity + '%';
    
                dayNum.append(statsNum);
                fiveDay.append(dayNum);
            }
            
            var history = document.createElement("div");
            history.setAttribute('class', 'his bg-dark');
            history.setAttribute('id', city);
            history.innerText = city;

            cup.append(history);            
        })
    }) 
};

var cityHandler = function() {
    var texting = document.querySelector("#searchTerm");
    var input =  document.querySelector("#searchTerm").value;
  
    if (input) {
      search(input);
      texting.value = "";
    } else {
      alert("Please enter a city name");
    }
};

cup.addEventListener("click", function(event) {
    var element = event.target;
    var mop = element.innerText;
    search(mop);

    element.remove();
});




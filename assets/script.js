var date = moment().format("M/D/YY");

var dates = [moment().add(1, 'days').format("M/D/YY"), moment().add(2, 'days').format("M/D/YY"), moment().add(3, 'days').format("M/D/YY"), moment().add(4, 'days').format("M/D/YY"), moment().add(5, 'days').format("M/D/YY")]

var statArr = [7,15,23,31,39]

function search(city){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=40d5443567bb7557b36399e8bdcca171&units=imperial')
    .then(function(response) {
        return response.json();
    }).then(function(response) {
        console.log(response);

        var infoBox = document.querySelector("#infoBox");

        var wet = document.createElement("div");
        wet.setAttribute('class', 'border border-dark corn p-2');

        infoBox.append(wet);
            
        wet.innerHTML = '<h2 id=moo>' + city + ' (' + date + ')' + '</h2>';

        var iconUrl = `http://openweathermap.org/img/wn/${response.weather[0].icon}.png`;

        var moo = document.querySelector("#moo");    
        var weatherIcon = document.createElement('img');
        weatherIcon.setAttribute('src', iconUrl);
        moo.append(weatherIcon);

        var corn = document.querySelector(".corn");   

        var stats = document.createElement("div");
        stats.setAttribute('class', 'stats');

        stats.innerHTML = 'Temp: ' + response.main.temp + '&#8457;' 
        + '<br>' + 'Wind: ' + response.wind.speed + ' MPH'
        + '<br>' + 'Humidity: ' + response.main.humidity + '%';

        corn.append(stats);
    })

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=40d5443567bb7557b36399e8bdcca171&units=imperial')
    .then(function(response) {
        return response.json();
    }).then(function(response) {
        console.log(response);

        var five = document.createElement("div");
        five.setAttribute('class', 'container');
        five.innerHTML = '<h4 class="mt-2"> 5-Day Forcast:</h4>';

        infoBox.append(five);

        var fiveDay = document.createElement("div");
        fiveDay.setAttribute('class', 'row text-light');
        five.append(fiveDay);
        
        for( var i = 0; i<5; i++ ) {
            var dayNum = "day" + i;
            dayNum = document.createElement("div");
            dayNum.setAttribute('class', 'card col-2 bg-dark');
            dayNum.innerHTML = '<h5 class="mt-2">' + dates[i] + '</h5>';
            var iconNum = "icon" + i;
            iconNum = `http://openweathermap.org/img/wn/${response.list[statArr[i]].weather[0].icon}.png`;
            var weatherIcon = document.createElement('img');
            weatherIcon.setAttribute('src', iconNum);
            dayNum.append(weatherIcon);

            var statsNum = "stats" + i;
            statsNum = document.createElement("div");
            statsNum.setAttribute('class', 'stats');

            statsNum.innerHTML = 'Temp: ' + response.list[statArr[i]].main.temp + '&#8457;'
            + '<br>' + 'Wind: ' + response.list[statArr[i]].wind.speed + ' MPH'
            + '<br>' + 'Humidity: ' + response.list[statArr[i]].main.humidity + '%';

            dayNum.append(statsNum);
            fiveDay.append(dayNum);
        }
    })
}

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
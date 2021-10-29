var date = moment().format("M/D/YY")

function search(){
    var input =  document.querySelector("#searchTerm").value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=40d5443567bb7557b36399e8bdcca171&units=imperial')
    .then(function(response) {
        return response.json();
    }).then(function(response) {
        console.log(response);

        var infoBox = document.querySelector("#infoBox");

        var wet = document.createElement("div");
        wet.setAttribute('class', 'border border-dark corn p-2');

        infoBox.append(wet);
            
        wet.innerHTML = '<h2 id=moo>' + input + ' (' + date + ')' + '</h2>';

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
}
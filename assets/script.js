var date = moment().format("M/D/YY");
var date1 = moment().add(1, 'days').format("M/D/YY");
var date2 = moment().add(2, 'days').format("M/D/YY");
var date3 = moment().add(3, 'days').format("M/D/YY");
var date4 = moment().add(4, 'days').format("M/D/YY");
var date5 = moment().add(5, 'days').format("M/D/YY");


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

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input+'&appid=40d5443567bb7557b36399e8bdcca171&units=imperial')
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

        var day1 = document.createElement("div");
        day1.setAttribute('class', 'card col-2 bg-dark');
        day1.innerHTML = '<h5 class="mt-2">' + date1 + '</h5>';

        var icon1 = `http://openweathermap.org/img/wn/${response.list[3].weather[0].icon}.png`;
        var weatherIcon = document.createElement('img');
        weatherIcon.setAttribute('src', icon1);
        day1.append(weatherIcon);

        var stats1 = document.createElement("div");
        stats1.setAttribute('class', 'stats');

        stats1.innerHTML = 'Temp: ' + response.list[3].main.temp + '&#8457;'
        + '<br>' + 'Wind: ' + response.list[3].wind.speed + ' MPH'
        + '<br>' + 'Humidity: ' + response.list[3].main.humidity + '%';

        day1.append(stats1);
        fiveDay.append(day1);


        var day2 = document.createElement("div");
        day2.setAttribute('class', 'card col-2 bg-dark');
        day2.innerHTML = '<h5 class="mt-2">' + date2 + '</h5>';
        var icon2 = `http://openweathermap.org/img/wn/${response.list[11].weather[0].icon}.png`;
        var weatherIcon = document.createElement('img');
        weatherIcon.setAttribute('src', icon2);
        day2.append(weatherIcon);

        var stats2 = document.createElement("div");
        stats2.setAttribute('class', 'stats');

        stats2.innerHTML = 'Temp: ' + response.list[11].main.temp + '&#8457;'
        + '<br>' + 'Wind: ' + response.list[11].wind.speed + ' MPH'
        + '<br>' + 'Humidity: ' + response.list[11].main.humidity + '%';

        day2.append(stats2);

        fiveDay.append(day2);


        var day3 = document.createElement("div");
        day3.setAttribute('class', 'card col-2 bg-dark');
        day3.innerHTML = '<h5 class="mt-2">' + date3 + '</h5>';
        var icon3 = `http://openweathermap.org/img/wn/${response.list[19].weather[0].icon}.png`;
        var weatherIcon = document.createElement('img');
        weatherIcon.setAttribute('src', icon3);
        day3.append(weatherIcon);

        var stats3 = document.createElement("div");
        stats3.setAttribute('class', 'stats');

        stats3.innerHTML = 'Temp: ' + response.list[19].main.temp + '&#8457;'
        + '<br>' + 'Wind: ' + response.list[19].wind.speed + ' MPH'
        + '<br>' + 'Humidity: ' + response.list[19].main.humidity + '%';

        day3.append(stats3);
        fiveDay.append(day3);


        var day4 = document.createElement("div");
        day4.setAttribute('class', 'card col-2 bg-dark');
        day4.innerHTML = '<h5 class="mt-2">' + date4 + '</h5>';
        var icon4 = `http://openweathermap.org/img/wn/${response.list[27].weather[0].icon}.png`;
        var weatherIcon = document.createElement('img');
        weatherIcon.setAttribute('src', icon4);
        day4.append(weatherIcon);

        var stats4 = document.createElement("div");
        stats4.setAttribute('class', 'stats');

        stats4.innerHTML = 'Temp: ' + response.list[27].main.temp + '&#8457;'
        + '<br>' + 'Wind: ' + response.list[27].wind.speed + ' MPH'
        + '<br>' + 'Humidity: ' + response.list[27].main.humidity + '%';

        day4.append(stats4);
        fiveDay.append(day4);


        var day5 = document.createElement("div");
        day5.setAttribute('class', 'card col-2 bg-dark');
        day5.innerHTML = '<h5 class="mt-2">' + date5 + '</h5>';
        var icon5 = `http://openweathermap.org/img/wn/${response.list[35].weather[0].icon}.png`;
        var weatherIcon = document.createElement('img');
        weatherIcon.setAttribute('src', icon5);
        day5.append(weatherIcon);

        var stats5 = document.createElement("div");
        stats5.setAttribute('class', 'stats');

        stats5.innerHTML = 'Temp: ' + response.list[35].main.temp + '&#8457;'
        + '<br>' + 'Wind: ' + response.list[35].wind.speed + ' MPH'
        + '<br>' + 'Humidity: ' + response.list[35].main.humidity + '%';

        day5.append(stats5);
        fiveDay.append(day5);
    })
}
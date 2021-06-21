const weatherMap = {
    Clear: {text: "맑음", className: "sunny-mode", img: "img/sun.png"},
    Rain: {text: "비", className: "rainny-mode", img: "img/rain.png"},
    Mist: {text: "비", className: "rainny-mode", img: "img/rain.png"},
    Clouds: {text: "구름", className: "cloudy-mode", img: "img/cloud.png"},
};

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/onecall?lat=37.56&lon=126.97&exclude=minutely,hourly,alerts&appid=4593d36c615a110af006665caa1f5ab8&units=metric",
    success: function(res) {
        let temp = Math.floor(res.current.temp);
        $('.temperature').text(temp + '˚');

        let weather = weatherMap[res.current.weather[0].main];
        // let weather = weatherMap["Mist"];
        console.log(weather);
        $('.temperature-text').text(weather.text);
        $('.main-left').addClass(weather.className);
        $('.today-info img').attr('src', weather.img);
    }
})

let weather = {
    fetchWeather: function (city) {
        api_key :'92e02829bb8b82a2588a7ae1d5e0e23e', 
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=ru&units=metric&appid=92e02829bb8b82a2588a7ae1d5e0e23e"
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;

        console.log(name, icon, description, temp, humidity);

        document.getElementById('city').innerHTML = (name);
        document.getElementById('description').innerHTML = ("На улице " + description);
        document.getElementById('temp').innerHTML = ("Температура: " + temp + "°С");
        document.getElementById('humidity').innerHTML = ("Влажность: " + humidity + '%');
    }
};


var current_theme = 'light';

var main_box = document.getElementById('main_box');
//var weather_name = document.getElementById('weather_name');
var theme = document.getElementById('theme_button');
var bg = document.getElementById('body');
var city = document.getElementById('city');
var description = document.getElementById('description');
var temp = document.getElementById('temp');
var humidity = document.getElementById('humidity');
var input = document.getElementById('input');
var btn = document.getElementById('btn')

function light_theme() {
    current_theme = 'dark';

    main_box.style.backgroundColor = 'white';
    main_box.style.opacity = '0.3';

  //  weather_name.style.color = 'black';
   // weather_name.style.opacity = '1';

    theme_button.style.backgroundColor = 'white';
    theme_button.style.opacity = '0.3';

    city.style.backgroundColor = 'white';
    city.style.color = 'black';

    description.style.backgroundColor = 'white';
    description.style.color = 'black';

    temp.style.backgroundColor = 'white';
    temp.style.color = 'black';

    humidity.style.backgroundColor = 'white';
    humidity.style.color = 'black';

    input.style.backgroundColor = 'white';
    input.style.color = 'black';

    btn.style.backgroundColor = 'white';
    btn.style.color = 'black';
    btn.borderColor = 'black';


    console.log('light_theme is READY!')
}

light_theme();

function change_theme() {

    if (current_theme == 'light') {
        current_theme = 'dark';

    
        main_box.style.backgroundColor = 'white';
        main_box.style.opacity = '0.3';

      //  weather_name.style.color = 'black';
      //  weather_name.style.opacity = '1';

        theme_button.style.backgroundColor = 'white';
        theme_button.style.opacity = '0.3';
        theme_button.style.color = 'black';

        city.style.backgroundColor = 'white';
        city.style.color = 'black';

        description.style.backgroundColor = 'white';
        description.style.color = 'black';

        temp.style.backgroundColor = 'white';
        temp.style.color = 'black';
    
        humidity.style.backgroundColor = 'white';
        humidity.style.color = 'black';

        input.style.backgroundColor = 'white';
        input.style.color = 'black';

        btn.style.backgroundColor = 'white';
        btn.style.color = 'black';
        btn.borderColor = 'black';
    
        console.log('light_theme is READY!')
    } else {
        current_theme = 'light';
  
        main_box.style.backgroundColor = 'black';
        main_box.style.opacity = '.5';

      //  weather_name.style.color = 'white';
      //  weather_name.style.opacity = '1';

        theme_button.style.backgroundColor = 'black';
        theme_button.style.opacity = '.5';
        theme_button.style.color = 'white';

        city.style.backgroundColor = 'black';
        city.style.color = 'white';

        description.style.backgroundColor = 'black';
        description.style.color = 'white';

        temp.style.backgroundColor = 'black';
        temp.style.color = 'white';
    
        humidity.style.backgroundColor = 'black';
        humidity.style.color = 'white';

        input.style.backgroundColor = 'black';
        input.style.color = 'white';

        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
        btn.borderColor = 'white';


        console.log('dark_theme is READY!')
    }
}


theme_button.addEventListener('click', function(e) {
    change_theme()
})


btn.addEventListener('click', function(e) {
    var city = input.value;

    if (city == '') {
        return;
    }

    weather.fetchWeather(city);


    console.log(city);
    input.value = '';

})

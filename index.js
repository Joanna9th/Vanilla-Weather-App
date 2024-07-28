const APIkey = "4561e2c6f31601a0ca29o46bce3t1e7d";

function weatherApp(response) {
  let weatherColor = "";
  let weathertemp = Math.round(response.data.temperature.current);

  console.log(response);
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.temperature.current);

  let wind = document.querySelector("#wind");
  wind.innerHTML = response.data.wind.speed;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.temperature.humidity;

  /*  if (weathertemp >= 24) {
    weatherColor = "red";
  } else {
    weatherColor = "lightblue";
  }
  const mainContainer = document.querySelector("#mainContainer");
  mainContainer.style.backgroundColor = weatherColor; */

  var image = document.getElementById("myImage");
  image.src = response.data.condition.icon_url;
  getForecast(response.data.city);
}

function getForecast(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${APIkey}&units=metric`;
  console.log(apiUrl);
  axios(apiUrl).then(displayForecast);
}
function temperatureApi(city) {
  let url =
    `https://api.shecodes.io/weather/v1/current?query=${city}&key=` + APIkey;
  axios.get(url).then(weatherApp);
}

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#cityform");
  let city = document.querySelector("#city");
  city.innerHTML = input.value;
  temperatureApi(input.value);
}

let searchForm = document.querySelector("#search-form");
console.log(searchForm);
searchForm.addEventListener("submit", searchCity);

function displayForecast(response) {
  console.log(response.data);
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
    <div class="weather-forecast-day">
      <div class="weather-forecast-date">${day}</div>
      <div class="weather-forecast-icon">🌤️</div>
      <div class="weather-forecast-temperature">
        <div class="temperature-strong">23ºC</div>
        <div class="temperature-nostrong">15ºC</div>
      </div>
    </div>
  `;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

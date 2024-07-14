const APIkey = "4561e2c6f31601a0ca29o46bce3t1e7d";

function weatherApp(response) {
  console.log(response);
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = response.data.temperature.current;
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

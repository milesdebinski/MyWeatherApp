const api = { 
  key: "e21658a451597cf8c068e069682f4f1e",
  base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector('.search-box')

search.addEventListener('keypress', locationInput);

function locationInput(event) {
  if (event.keyCode == 13) {
    getResult(search.value);
    console.log(search.value);
  }
}


function getResult(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
  .then( weatherAPI => {
      return weatherAPI.json();
  }).then(displayResult)
}


function displayResult(wAPI) {
  console.log(wAPI)
  let city = document.querySelector('.city');
  city.innerText = `${wAPI.name}, ${wAPI.sys.country}`

  let now = new Date();
  let date = document.querySelector('.date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.temp');
  temp.innerText = `${Math.round(wAPI.main.temp)}°c`

  let sky = document.querySelector('.sky');
  sky.innerText = wAPI.weather[0].main

  let minmax = document.querySelector('.min-max');
  minmax.innerText = `${Math.round(wAPI.main.temp_min)}°c ~ ${Math.round(wAPI.main.temp_max)}°c`

  function dateBuilder (d) {
   let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
   let months = ['January', 'February', 'March','April', 'May', 'January', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return ` ${day} ${date} ${month} ${year}` 
  }



}
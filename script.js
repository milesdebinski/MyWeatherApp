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


function displayResult(master) {
  console.log(master)
}
var searchBtn = document.getElementById("searchBtn")
var userCity = document.getElementById("userCity")
var search = document.getElementsByClassName("")

  var tempe = document.getElementsByClassName("temp")
  var cityName = document.getElementsByClassName("city")

  const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((res) => {
        tempe.innerHTML = res.temp
    })
    
  }

  searchBtn.addEventListener("click" , (e)=>{
    getWeather(userCity.value)
  })
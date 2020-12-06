const API_KEY = "373c39ecf1996e1a457d029cf06778cd"
const COORDS = 'coords'
const weather = document.querySelector('.js-weather') 

function getWeather(lat , lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return(response.json())
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name 
        weather.innerHTML = `<h3>${temperature}℃ @ ${place}</h3>`
    });

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS , JSON.stringify(coordsObj)) 
}

function handleGeoSucces(positon){
    const latitude = positon.coords.latitude
    const longitude = positon.coords.longitude
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj)
    getWeather(latitude , longitude)
}

function handleGeoError(){
    console.log('cant access geo location')
}

function askForCoords(){
    //window document 로도 
    navigator.geolocation.getCurrentPosition(handleGeoSucces , handleGeoError) // currnt 현재 positon 위치
    //geolocation 지리위치
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS)
    if(loadedCoords !== null){
        // get Weather 날씨.
        const parseCoodes = JSON.parse(loadedCoords)
        getWeather(parseCoodes.latitude , parseCoodes.longitude)
    }else{
        askForCoords()//좌표를 물어보는거.
    }

}
function init(){
    loadCoords()
}

init();
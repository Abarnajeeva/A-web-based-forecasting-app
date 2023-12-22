let apIid="76a0e38b871433bb3efc3ffd2f3ddacb"
function getweather(city){
    let url="https://api.openweathermap.org/data/2.5/weather?q="
    let fullUrl=${url}${city}&appid=${apIid}&units=imperial
    let weatherPromise=fetch(fullUrl)
        return weatherPromise.then((response)=>{
        return response.json()
    })
}
function searchcity(){
    const city=document.getElementById("input").value
    if(city===""){
        alert ("enter the city to search")
    }else{
    getweather(city).then((response)=>{
//if(response.status===404){
          //  alert("city not found")
       
        searchdata(response)
        //console.log(response)
    })
    document.getElementById("input").value=''
}
}
function searchdata(weatherdata){
    if(weatherdata.name===undefined){
        alert("city not found")
    }else{
    document.getElementById("city-name").innerText=weatherdata.name
    document.getElementById("weather-type").innerText=weatherdata.weather[0].main
    document.getElementById("temp").innerText=weatherdata.main.temp

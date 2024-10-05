const formm=document.querySelector('#f')
const sbox= document.getElementById('searchbox');
const sbtn= document.getElementById('searchbtn');
const tem= document.getElementById('temp');
const des= document.getElementById('desc');
const mi= document.getElementById('min');
const ma= document.getElementById('max');
const hum= document.getElementById('humi');
const wind= document.getElementById('wind');
const sea= document.getElementById('sea');
const pres= document.getElementById('pressure');
const spe= document.getElementById('speed');
const sunr= document.getElementById('sr');
const suns= document.getElementById('ss');
const cityinfo= document.getElementById('city');

f.addEventListener('submit', (event)=>{
    event.preventDefault();
});




async function checkweather(city){
    const api_key = "279e4d3dfe3820493749c34e91a56be0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data= await fetch(`${url}`).then(response => response.json())

    console.log(weather_data);

    cityinfo.innerHTML=`Weather for ${sbox.value}`

    tem.innerHTML= `${Math.round(weather_data.main.temp - 273.15)}`+ "°C"
    des.innerHTML="Description: " +`${weather_data.weather[0].description}` 
    mi.innerHTML="Feels like: " + `${Math.round(weather_data.main.feels_like - 273.15)}`+ "°C"
    // ma.innerHTML="max temperature is " + `${Math.round(weather_data.main.temp_max - 273.15)}`


    hum.innerHTML=`${weather_data.main.humidity}%`
    // wind.innerHTML=`${weather_data.wind.deg}`
    sea.innerHTML=`sealevel: ${weather_data.main.sea_level}`
    pres.innerHTML=`pressure: ${weather_data.main.pressure}`

    const date = new Date(`${weather_data.sys.sunrise}` * 1000);
    const datee = new Date(`${weather_data.sys.sunset}` * 1000);

    let hours = date.getHours() % 12 || 12;
    const minutes = String(date.getMinutes()).padStart(2, '0'); 
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    let hourss = datee.getHours() % 12 || 12;
    const minutess = String(datee.getMinutes()).padStart(2, '0'); 
    const ampmm = datee.getHours() >= 12 ? 'PM' : 'AM';

    


    spe.innerHTML=`${weather_data.wind.speed}km/hr`
    sunr.innerHTML=`sunrise: ${`${hours}:${minutes} ${ampm}`}`
    suns.innerHTML=`sunset: ${`${hourss}:${minutess} ${ampmm}`}`


}

sbtn.addEventListener('click', ()=>{
    checkweather(sbox.value);
});

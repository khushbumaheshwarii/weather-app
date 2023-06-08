const API_KEY= 'e96048e8ea02c95bad69525302810f58';
const BASE_URL='https://api.openweathermap.org/data/2.5';


const getWeatherData = (infoType, searchParam) =>{
    const url= new URL(BASE_URL + '/'+infoType )
    url.search=new URLSearchParams({...searchParam, appid:API_KEY});

    return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}
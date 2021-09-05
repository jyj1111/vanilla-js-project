const key="1a4c5a725ca29d4bc39b7c0e30204eb4";
function s(position){
    const lat=position.coords.latitude;
    const lng=position.coords.longitude;
    
    const address=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
    fetch(address)
        .then((response)=>response.json())
        .then((data)=>{
            const weather=document.querySelector("#weather");
            const city=document.querySelector("#city");
            const temperature=document.querySelector("#temperature");
            weather.innerText="날씨 : "+data.weather[0].main;
            city.innerText="도시 : "+data.name;
            temperature.innerText="온도 : "+String(data.main.temp)+"도";
        });
      
}

function f(){
    alert("찾을 수 없어요");
}
navigator.geolocation.getCurrentPosition(s,f);
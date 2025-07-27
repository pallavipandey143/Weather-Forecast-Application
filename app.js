const form=document.querySelector("form");
const updateUI=(data)=>{
    const {locationsdets,weatherdets}=data;
    console.log(locationsdets,weatherdets);
    let html=`
                <h3>${locationsdets.EnglishName}</h3>
                <h3>${weatherdets.WeatherText}</h3>
                <span>${weatherdets.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
    `
    document.querySelector(".details").innerHTML=html;
    if(weatherdets.IsDayTime){
        document.querySelector(".time").src="js/icons/day.svg";
    }
    else{
        document.querySelector(".time").src="js/icons/night.svg";

    }
    document.querySelector(".icon img").src=`js/icons/${weatherdets.WeatherIcon}.svg`;

    if (document.querySelector(".card").classList.contains("d-none")){
        document.querySelector(".card").classList.remove("d-none");
    }
}

const getData =async (city)=>{
    const locationsdets= await getLocation(city);
    const weatherdets=await getWeather(locationsdets.Key);
    console.log(locationsdets,weatherdets);
    return {locationsdets,weatherdets}
};
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const city=form.city.value;
    getData(city)
        .then((data)=>{
            updateUI(data);
        })
        .catch((err)=>console.log(err));
    form.reset();
});
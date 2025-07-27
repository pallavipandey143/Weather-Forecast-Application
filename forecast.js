const key = "WjANfgpgcU55kjNsGo6M03XrAT6nONZk";

const getLocation= async(city)=>{
    const base="http://dataservice.accuweather.com/locations/v1/cities/search";
    const url=`?apikey=${key}&q=${city}`;
    const response= await fetch(base+url);
    const data= await response.json();
    // console.log(data[0]);
    return data[0];

};
const getWeather = async (id)=>{
    const base=`http://dataservice.accuweather.com/currentconditions/v1/${id}`;
    const url = `?apikey=${key}`;
    const response= await fetch(base+url);
    const data= await response.json();
    // console.log(data[0]);
    return data[0]

}
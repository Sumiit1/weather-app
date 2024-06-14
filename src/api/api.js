const apiKey = '2365b8e1e646b5ca61ea86d258a190f2';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then((res) => res.json())
        .then((json) => {
            return json;
        })
}

export default getWeather;
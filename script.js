const displayWeather = () => {
    const location = document.getElementById('input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3232636cc5fd2cb08ea65dfb46f7cac2`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
}

const displayData = (data) => {
    const kToC = `${data.main.temp}`
    const cel = kToC - 273;
    const toFixC = cel.toFixed(1);
    const Data = `
    <h2 id="name" >${data.name}</h2>
    <h3 id="temp" > temp:${toFixC} ℃ </h3>
    <h4 id="weather" >weather: ${data.weather[0].main} </h4>
`;
    const AllData = document.createElement('div').innerHTML = Data;
    AllData.className = "allData";
    appendData(AllData);
    // document.getElementById('weatherStatus').appendChild(AllData);
}
const appendData = (AllData) => {
    document.getElementById('weatherStatus').innerHTML = AllData;
}
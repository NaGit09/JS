

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "d498fc58320ff0935a20ad97ac54674a";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
        } displayError(error);
    }
    else {
        displayError("please enter a city");
    }

});
async function displayWeatherInfo(data) {
    console.log(data);
}
function displayError(messange) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = messange;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}
async function getWeatherData(city) {
    const apiUl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUl);
    console.log(response);
    // if(!response.ok){
    //     throw new Error ("could not fecth weather data")
    // }
    // return await response.json();
}
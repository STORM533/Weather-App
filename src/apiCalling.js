import { divs } from "./content.js";
async function getWeather(input) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=metric&key=5AN4VQVYNPK8GATDWNPVPE4ZC&contentType=json`,
  );
  const weatherData = await response.json();
  divs(weatherData);
}
export { getWeather };

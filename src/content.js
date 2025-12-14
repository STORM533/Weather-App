function divs(input) {
    const Address = document.querySelector("#Address");
    const temp = document.querySelector("#todayTemp");
    const feelslike = document.querySelector("#feelslike");
    const humidity= document.querySelector("#Humidity");
    const description = document.querySelector("#description");
    Address.textContent = "City: " + input.address;
    temp.textContent ="Current Temperature: " +  input.currentConditions.temp +" C";
    feelslike.textContent = "Feels Like: " + input.currentConditions.feelslike + " C";
    humidity.textContent = "Humidity: " + input.currentConditions.humidity + "%";
    description.textContent = input.description;
}
export {divs};
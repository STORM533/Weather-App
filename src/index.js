import "./styles/styles.css"
import {getWeather} from "./apiCalling.js";

function disp() {
    const search  = document.querySelector("#searchbar");
    const form = document.querySelector("#myForm");
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        if(search.value==='') {
            alert('Please Enter A City');
        }else {
            getWeather(search.value);
        }
    });
}
disp();
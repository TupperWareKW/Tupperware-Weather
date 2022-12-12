import WeatherSource from "../data/cuacaindb-source.js";
import { templateDetailCuaca, templateListWeather } from "../views/template/template-creator.js";

const Cuaca = {
    async render() {
        return `<div class="cuaca-container">

        </div>`;
    },

    async afterRender(prov = 'sumatera-utara', city = 'medan') {
        const cuaca = await WeatherSource.getCuaca(prov, city);
        console.log(cuaca);

        const date = new Date();
        const data = cuaca.data.params;
        const dataWeather = [];
        const listWeather = [];

        data.forEach(el => {
            for (let i = 0; i < el.times.length; i++) {
                if (date <= new Date(`${el.times[i + 1].datetime.substring(0, 4)}-${el.times[i + 1].datetime.substring(4, 6)}-${el.times[i + 1].datetime.substring(6, 8)}T${el.times[i + 1].datetime.substring(8, 10)}:${el.times[i + 1].datetime.substring(10, 12)}`)) {
                    for (let j = i; j < el.times.length; j++) {
                        if (el.description.toUpperCase() == 'WEATHER') {
                            listWeather.push({ weather: el.times[j] });
                        }
                        if (el.description.toUpperCase() == 'TEMPERATURE') {
                            listWeather.push({ temperatur: el.times[j] })
                        }
                    }
                    dataWeather.push({ el, times: el.times[i] });
                    break;
                }
            }
        });

        console.log(listWeather)
        const mainContainer = document.querySelector('.cuaca-container');        
        mainContainer.innerHTML = templateDetailCuaca(cuaca, dataWeather);
        WeatherSource.getProvinsi();


        let flag = listWeather.length / 2;
        for (let i = 0; i < listWeather.length; i++) {
            if (i < listWeather.length / 2) {
                const date = new Date(`${listWeather[i].temperatur.datetime.substring(0, 4)}-${listWeather[i].temperatur.datetime.substring(4, 6)}-${listWeather[i].temperatur.datetime.substring(6, 8)}T${listWeather[i].temperatur.datetime.substring(8, 10)}:${listWeather[i].temperatur.datetime.substring(10, 12)}`)
                const dateString = `${date.getDate()} ${date.toLocaleString('default', { month: "short" })} ${date.getFullYear()}`;
                const timeString = `${date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}`;
                document.querySelector('.cuaca-perjam').innerHTML += templateListWeather(dateString, timeString, listWeather, i, flag);
                // console.log(flag)
                flag += 1;
            }
        }


         // event form onChange to render City form 
        document.querySelector('#provinsi').addEventListener('change', ()=> {
            const formProvinsi = document.querySelector('#provinsi').selectedIndex;       
            const selected = document.querySelectorAll('#provinsi option')[formProvinsi].innerText;
            const formatText = selected.replace(" ", "-").toLowerCase();
            WeatherSource.getCityFromProv(formatText);
        })

        // submit search

        const formSearchWeather =document.querySelector('form');
        formSearchWeather.addEventListener('submit', event => {
            event.preventDefault();
            const formProvinsi = document.querySelector('#provinsi').selectedIndex;
            const selected = document.querySelectorAll('#provinsi option')[formProvinsi].innerText;
            const formatText = selected.replace(" ", "-").toLowerCase();

            const formCity = document.querySelector('#kota').selectedIndex;
            const citySelected = document.querySelectorAll('#kota option')[formCity].innerText;
            let formatTextCity = null;
            if(citySelected.includes(' ')) {
                formatTextCity = citySelected.replace(/ /g, '-').toLowerCase();
            }else {
                formatTextCity = citySelected.toLowerCase();
            }

            this.afterRender(formatText, formatTextCity);  
        })

    }
}

export default Cuaca;
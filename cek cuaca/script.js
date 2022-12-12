import UrlParser from './routes/url-parser.js';
import routes from './routes/routes.js';

async function renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const body = document.querySelector('.container-main');
    body.innerHTML = await page.render();
    await page.afterRender()
}

window.addEventListener('load', async () => {
    await renderPage();
    // renderHomePage();
    // getLatestEarthquake()

    const menuButton = document.querySelector('.menu-button');   
    menuButton.addEventListener('click', () => {
        const menu = document.querySelector('.nav');
        menu.classList.toggle('open');
    })    


    const linkButton = document.querySelectorAll('.nav a');
    linkButton.forEach(el => {
        el.addEventListener('click', () => closeMenu())
    })
    document.querySelector('main').onclick = () => closeMenu();
    document.querySelector('#cuaca-page').onclick = () => closeMenu();
    function closeMenu() {
        const menu = document.querySelector('.nav');
        menu.classList.remove('open');
    }
    
})

window.addEventListener('hashchange', () => {
    renderPage();
})

function renderHomePage1() {

    const mainContainer = document.querySelector('.container-main');

    mainContainer.innerHTML = `
    <section id="tupperware-cuaca">
        <div class="main-image" data-aos="fade-right" data-aos-duration="800">
            <img src="image/weather-app.png" alt="">
        </div>
        <div class="tupperware-desc" data-aos="fade-left" data-aos-duration="800">
            <p>Ketahui informasi cuaca terkini berdasarkan wilayah yang anda inginkan dan berita gempa yang akurat dengan data yang diperoleh dari BMKG</p>
        </div>
    </section>

    <section class="layanan">
        <p class="text-layanan">Layanan Kami</p>
        
        <div class="container-layanan">
            <div class="cek-cuaca" onclick="getCuaca('sumatera-utara', 'medan')" data-aos="fade-up" data-aos-duration="800">
                <div class="container-image">
                    <img src="image/weather-app.png" alt="">
                </div>                    
                <div class="text-cuaca text-info-layanan">
                    <h2>Cek Cuaca</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis est, quaerat non culpa iure ullam?</p>
                </div>
            </div>

            <div class="det-gempa" onclick="getLatestEarthquake()" data-aos="fade-up" data-aos-duration="800">
                <div class="container-image">
                    <img src="image/earthquake.png" alt="">
                </div>                    
                <div class="text-gempa text-info-layanan">
                    <h2>Berita Gempa</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus ullam magni, molestiae magnam earum.</p>
                </div>
            </div>
        </div>    
    </section>
    `
};


function renderCuacaPage(responseWeather) {

    const date = new Date();
    const data = responseWeather.data.params;
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
    })

    console.log(listWeather)
    const mainContainer = document.querySelector('.container-main');

    mainContainer.innerHTML = `
    <section class="cari-wilayah">
                <form>
                    <select name="provinsi" id="provinsi">
                        <option value="Pilih Provinsi">Pilih provinsi</option>
                    </select>

                    <select name="Kota" id="kota">
                        <option value="Pilih-kota">Pilih Kabupaten/Kota</option>
                    </select>

                    <button type="submit">Search</button>
                </form>
            </section>
            
            <section class="cuaca">
                <div class="left">
                    <img src="image/${dataWeather[6].times.name}.png" alt="">
                    <p class="nama-cuaca">${dataWeather[6].times.name}</p>
                </div>
                <div class="right">
                    <ul>
                        <li><span>Temperatur</span> <span class="temperatur">${dataWeather[5].times.celcius.replace(' ', `&deg;`)}</span></li>
                        <li><span>Kelembapan Udara</span><span class="humidity">${dataWeather[0].times.value}</span></li>
                        <li><span>Arah angin</span><span class="wind-direction">${dataWeather[7].times.card}</span></li>
                        <li><span>Kecepatan angin</span><span class="wind-speed">${dataWeather[8].times.kph}kph</span></li>
                    </ul>
                    <p id='location'>${responseWeather.data.domain}, ${responseWeather.data.description}</p>
                </div>
            </section>

            <section class="cuaca-perjam">
                

            </section>
    `


    // card List Weather

    let flag = listWeather.length / 2;
    for (let i = 0; i < listWeather.length; i++) {
        if (i < listWeather.length / 2) {
            const date = new Date(`${listWeather[i].temperatur.datetime.substring(0, 4)}-${listWeather[i].temperatur.datetime.substring(4, 6)}-${listWeather[i].temperatur.datetime.substring(6, 8)}T${listWeather[i].temperatur.datetime.substring(8, 10)}:${listWeather[i].temperatur.datetime.substring(10, 12)}`)
            const dateString = `${date.getDate()} ${date.toLocaleString('default', { month: "short" })} ${date.getFullYear()}`;
            const timeString = `${date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}`;
            document.querySelector('.cuaca-perjam').innerHTML += `
                <div class="card-cuaca">
                    <p class="waktu">${dateString} ${timeString}</p>
                    <p class="temperatur">${listWeather[i].temperatur.celcius.replace(' ', '&deg;')}</p>
                    <img src="image/${listWeather[flag].weather.name}.png" alt="" id='mini-card-image'>
                    <p id='mini-name-cuaca'>${listWeather[flag].weather.name}</p>                    
                </div>
            `
            // console.log(flag)
            flag += 1;
        }

    }


    // event form onChange to render City form 
    document.querySelector('#provinsi').addEventListener('change', ()=> {
        const formProvinsi = document.querySelector('#provinsi').selectedIndex;       
        const selected = document.querySelectorAll('#provinsi option')[formProvinsi].innerText;
        const formatText = selected.replace(" ", "-").toLowerCase();
        getCityFromProv(formatText);
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

        getCuaca(formatText, formatTextCity);          
    })

};


// about us

function renderAboutUs() {
    const mainContainer = document.querySelector('.container-main');
    mainContainer.innerHTML = `
    <section class="about-us">
        <div class="description-app" data-aos="fade-right" data-aos-duration="800">
            <div class="container-description-app">
                <h2>Tupperware Weather</h2>
                <p>Seiring perkembangan teknologi kami merancang sebuah aplikasi perkiraan cuaca untuk mempermudah seseorang dalam mendapatkan informasi terbaru mengenai kondisi cuaca di sekitar atau daerah yang ingin dikunjungi dan pada aplikasi yang kami rancang juga akan memuat layanan informasi berita gempa terkini di seluruh Indonesia dengan data yang bersumber dari BMKG.</p>
            </div>                    
        </div>

        <div class="founder-app">
            <h2 data-aos="fade-left" data-aos-duration="1000">Founder of Tupperware Weather</h2>
            <div class="container-founder" data-aos="fade-left" data-aos-duration="1000">
                <div class="card-founder">
                    <div class="container-image-profil">
                        <img src="image/profil/ari.jpeg" alt="">
                    </div>
                    <p>Ari Pradhana Nasution</p>
                    <p>191112202</p>
                </div>
                <div class="card-founder">
                    <div class="container-image-profil">
                        <img src="image/profil/Picture1.jpg" alt="">
                    </div>
                    <p>M Arif Ambarita</p>
                    <p>191112202</p>
                </div>
                <div class="card-founder">
                    <div class="container-image-profil">
                        <img src="image/profil/picture3.png" alt="">
                    </div>
                    <p>Muhd. Fikry Aulya</p>
                    <p>191112202</p>
                </div>
            </div>
        </div>

        <div class="info-app">
            <div class="container-info-app">
                <h2>Thanks to</h2>
                <div class="container-thanks-to">
                    <div class="info-data">                    
                    <a href="https://data.bmkg.go.id/" target="blank">
                        <img src="https://data.bmkg.go.id/include/assets/img/logo-bmkg.svg">
                    </a>
                    </div>

                    <div class="info-data">                        
                        <a href="https://github.com/renomureza/cuaca-gempa-rest-api" target="blank">
                            <img src="image/github.png">
                            <p>R.M. Reza</p>
                        </a>                        
                    </div>
                </div>
                
            </div>
        </div>        
    </section>
    `
}



// render Berita Gempa 

function renderGempa(responseEarthquake, responseListEarthquake) {
    const infoGempa = responseEarthquake.Infogempa.gempa;
    const listGempa = responseListEarthquake.Infogempa.gempa
    const containerMain = document.querySelector('.container-main');
    containerMain.innerHTML = `
    <section class="berita-gempa">
        <div class="gempa-terbaru">
            <h2>Gempa Terkini</h2>
            <div class="container-gempa-terbaru">
                <img src="https://ews.bmkg.go.id/tews/data/${infoGempa.Shakemap}" class="main-image-latest">
                <p id="waktu">${infoGempa.Tanggal} - ${infoGempa.Jam}</p>
                <table>
                    <tr>
                        <td><img src="image//magnitude1.png" alt=""></td>
                        <td><p>Magnitudo </p></td>
                        <td>: ${infoGempa.Magnitude}</td>
                    </tr>
                    <tr>
                        <td><img src="image//kedalaman1.png" alt=""></td>
                        <td><p>Kedalaman </p></td>
                        <td>: ${infoGempa.Kedalaman}</td>
                    </tr>
                    <tr>
                        <td><img src="image//lokasi.png" alt=""></td>
                        <td><p>Lokasi </p></td>
                        <td>: ${infoGempa.Lintang} - ${infoGempa.Bujur}</td>
                    </tr>
                    <tr>
                        <td><img src="image//pusat1.png" alt=""> <span></span></td>
                        <td colspan="2">${infoGempa.Wilayah}</td>
                    </tr>
                    <tr>
                        <td><img src="image//dirasakan1.png" alt=""> <span></span></td>
                        <td>Dirasakan </td>
                        <td>: ${infoGempa.Dirasakan}</td>
                    </tr>            
                </table>        
            </div>
        </div>

        <hr>
        <div class="list-gempa">
            <div class="container-list-gempa">
                <h2>Gempa Dirasakan</h2>
                <div class="container-table">
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Waktu Gempa</th>
                            <th>Lintang - Bujur</th>
                            <th>Magnitudo</th>
                            <th>Kedalaman</th>
                            <th>Dirasakan</th>
                        </tr>  
                    </table>
                </div>
            </div>
        </div>
    </section>
    `

    // containerMain.innerHTML += `
    
    // `

    const tableList = document.querySelector('.container-list-gempa table');
    let number = 1;
    listGempa.forEach( el => {
        tableList.innerHTML += `
        <tr>
            <td>${number}</td>
            <td>${el.Tanggal +' ' + el.Jam}</td>
            <td>${el.Lintang + ' '+ el.Bujur}</td>
            <td>${el.Magnitude}</td>
            <td>${el.Kedalaman}</td>
            <td>${el.Wilayah}</td>
        </tr>`;

        number +=1;
    })
}

function showLoadingAnimation() {
    const loading = document.querySelector('.loading-animation');
    loading.style.display = 'block';
}

function hiddenLoadingAnimation() {
    const loading = document.querySelector('.loading-animation');
    loading.style.display = 'none';
}
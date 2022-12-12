const templateDetailCuaca = (responseWeather, dataWeather) => {
    return `
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
}

const templateListWeather = (dateString, timeString, listWeather, i, flag) => {
    return `
    <div class="card-cuaca">
        <p class="waktu">${dateString} ${timeString}</p>
        <p class="temperatur">${listWeather[i].temperatur.celcius.replace(' ', '&deg;')}</p>
        <img src="image/${listWeather[flag].weather.name}.png" alt="" id='mini-card-image'>
        <p id='mini-name-cuaca'>${listWeather[flag].weather.name}</p>                    
    </div>
    `
}

export {templateDetailCuaca, templateListWeather};
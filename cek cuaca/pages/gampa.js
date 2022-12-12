import WeatherSource from "../data/cuacaindb-source.js";

const Gempa = {
    async render() {
        return `
            <div class="gempa-container"><h2>Page Gempa</h2></div>
        `;
    },

    async afterRender() {
        const responseGempa = await WeatherSource.getLatestEarthquake()
        const infoGempa = responseGempa[1].Infogempa.gempa;
        const listGempa = responseListEarthquake.Infogempa.gempa
        const containerMain = document.querySelector('.gempa-container');

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
}

export default Gempa;
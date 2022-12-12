const AboutUs = {
    async render() {
        return `
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
        `;
    },

    async afterRender() {
        
    }
}

export default AboutUs
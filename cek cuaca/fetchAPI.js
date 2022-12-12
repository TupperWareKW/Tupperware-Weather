// let dataWeather = null;
let provinsi = null;

function getCuaca(provinsi = 'sumatera-utara', kota = 'medan') {
    const mainContainer = document.querySelector('.container-main');
    mainContainer.innerHTML = ''; // kosongkan layar
    // showLoadingAnimation();

    fetch(`https://cuaca-gempa-rest-api.vercel.app/weather/${provinsi}/${kota}`)
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        renderCuacaPage(responseJson);        
        // hiddenLoadingAnimation();
        getProvinsi();
    })
    .catch(error => {
        console.log(error);
    })
}

function getProvinsi() {
    fetch('https://api.binderbyte.com/wilayah/provinsi?api_key=2c37d29493b6870ca7a0db15f0e7b94e434e210cc61135749ba4cf39fca82910')
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        const formProvinsi = document.querySelector('#provinsi');
        responseJson.value.forEach(el => {
        formProvinsi.innerHTML += `
            <option value='${el.id}'>${el.name}</option>
        `
    })
    })
    .catch(error => {
        console.log(error);
    })
}

function getCityFromProv(prov) {
    fetch(`https://cuaca-gempa-rest-api.vercel.app/weather/${prov}`)
    .then(response => {
        return response.json();
    })
    .then(responseJSON => {
        const formCity = document.querySelector('#kota');
        formCity.innerHTML = "";
        responseJSON.data.areas.forEach( el => {
            formCity.innerHTML += `
                <option>${el.description}</option>
            `
        })
    })
    .catch(() => {
        const formCity = document.querySelector('#kota');
        formCity.innerHTML = '<option>Piih Kabupaten/Kota</option>'
    })
}

function getLatestEarthquake() {
    const mainContainer = document.querySelector('.container-main');
    mainContainer.innerHTML = ''; // kosongkan layar
    showLoadingAnimation()

    fetch('https://mycorsproxy-gempa.herokuapp.com/https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')
    .then(response => response.json())
    .then(responseJson => {        
        // renderGempa(responseJson);
        fetch('https://mycorsproxy-gempa.herokuapp.com/https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json')
        .then(responseList => responseList.json())
        .then(responseListJson => {
            renderGempa(responseJson, responseListJson);
            hiddenLoadingAnimation();
        })
    })
}

export default getCityFromProv

// const hantu = {
//     "data": {
//       "forecast": {
//         "issue": {
//           "timestamp": 20221017031902,
//           "year": 2022,
//           "month": 10,
//           "day": 17,
//           "hour": 3,
//           "minute": 19,
//           "second": 2
//         },
//         "area": [
//           {
//             "name": [
//               "Aek Kanopan",
//               "Kab. Labuhanbatu Utara"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Balige",
//               "Kab. Toba Samosir"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       17,
//                       62.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       17,
//                       62.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Binjai Kota",
//               "Kota Binjai"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Dolok Sanggul",
//               "Kab. Humbang Hasundutan"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       17,
//                       62.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       17,
//                       62.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 63
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Gunung Sitoli",
//               "Kab. Nias"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Gunung Tua",
//               "Kab. Padanglawas Utara"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       34,
//                       93.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       34,
//                       93.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Kabanjahe",
//               "Kab. Karo"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 63
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Kisaran",
//               "Kab. Asahan"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Kota Pinang",
//               "Kab. Labuhanbatu Selatan"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       33,
//                       91.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       33,
//                       91.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Lahomi",
//               "Kab. Nias Barat"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Lima Puluh",
//               "Kab. Batubara"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Lotu",
//               "Kab. Nias Utara"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Lubuk Pakam",
//               "Kab. Deli Serdang"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Medan",
//               "Kota Medan"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Padang Sidempuan",
//               "Kota Padang Sidempuan"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 65
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Pandan",
//               "Kab. Tapanuli Tengah"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 65
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 63
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Pangururan",
//               "Kab. Samosir"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Panyabungan",
//               "Kab. Mandailing Natal"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Pematang Raya",
//               "Kab. Simalungun"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       17,
//                       62.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       17,
//                       62.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Pematang Siantar",
//               "Kota Pematang Siantar"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 65
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Rantau Prapat",
//               "Kab. Labuhanbatu"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Salak",
//               "Kab. Pak-Pak Bharat"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       17,
//                       62.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 63
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Sei Rampah",
//               "Kab. Serdang Bedagai"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Sibolga",
//               "Kota Sibolga"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 63
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Sibuhuan",
//               "Kab. Padanglawas"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       21,
//                       69.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 63
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Sidikalang",
//               "Kab. Dairi"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       17,
//                       62.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Sipirok",
//               "Kab. Tapanuli Selatan"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       29,
//                       84.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       29,
//                       84.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 65
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       17,
//                       62.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       17,
//                       62.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       17,
//                       62.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       29,
//                       84.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Stabat",
//               "Kab. Langkat"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 63
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 63
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Tanjung Balai",
//               "Kota Tanjung Balai"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       32,
//                       89.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Tarutung",
//               "Kab. Tapanuli Utara"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 65
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       17,
//                       62.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       27,
//                       80.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       19,
//                       66.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       16,
//                       60.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       28,
//                       82.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       20,
//                       68
//                     ]
//                   },
//                   {
//                     "value": [
//                       18,
//                       64.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 63
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Tebing Tinggi",
//               "Kota Tebing Tinggi"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 65
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       22,
//                       71.6
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       30,
//                       86
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "name": [
//               "Teluk Dalam",
//               "Kab. Nias Selatan"
//             ],
//             "parameter": [
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 85
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 90
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 80
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   },
//                   {
//                     "value": 95
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 60
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       23,
//                       73.4
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       26,
//                       78.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       25,
//                       77
//                     ]
//                   },
//                   {
//                     "value": [
//                       31,
//                       87.8
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   },
//                   {
//                     "value": [
//                       24,
//                       75.2
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 63
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 63
//                   },
//                   {
//                     "value": 3
//                   },
//                   {
//                     "value": 1
//                   },
//                   {
//                     "value": 60
//                   },
//                   {
//                     "value": 61
//                   },
//                   {
//                     "value": 3
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   },
//                   {
//                     "value": [
//                       247.5,
//                       "WSW",
//                       24730
//                     ]
//                   }
//                 ]
//               },
//               {
//                 "timerange": [
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       15,
//                       17.26169175,
//                       27.78,
//                       7.71666666
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       10,
//                       11.5077945,
//                       18.52,
//                       5.14444444
//                     ]
//                   },
//                   {
//                     "value": [
//                       5,
//                       5.75389725,
//                       9.26,
//                       2.57222222
//                     ]
//                   },
//                   {
//                     "value": [
//                       2,
//                       2.3015589,
//                       3.704,
//                       1.028888888
//                     ]
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       }
//     }
//   }

// hantu.data.forecast.area.forEach(el => {
//     console.log(el.name);
// })
const cityname = document.getElementById('cityname')
const submitbtn = document.getElementById('submitbtn')
const city_name = document.getElementById('city_name')
const temp_status = document.getElementById('temp_status')
const temp_real_value = document.getElementById('temp_real_value')



const getinfo = async (event) => {
    event.preventDefault();
    let cityval = cityname.value
    // let url='api.openweathermap.org/data/2.5/weather?q=pune&units=metricappid=2bc790c4a5960c330b8296d81463721e'

    if (cityval === '') {
        city_name.innerText = 'Plzz write the city name before search'
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=2bc790c4a5960c330b8296d81463721e`
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`
            temp_real_value.innerText = arrdata[0].main.temp;
            const tempmood = arrdata[0].weather[0].main;
            if (tempmood === 'Clear') {
                temp_status.innerHTML = '<i class="fas fa-sun" style="color:#eccc68"></i>'
            } else if (tempmood === 'Clouds') {
                temp_status.innerHTML = '<i class="fas fa-cloud" style="color:#f1f2f6"></i>'
            }
            else if (tempmood === 'Rain') {
                temp_status.innerHTML = '<i class="fas fa-rain" style="color:#34b0be"></i>'
            }
            else {
                temp_status.innerHTML = '<i class="fas fa-sun" style="color:#eccc68"></i>'
            }


        } catch {
            city_name.innerText = 'Plzz write the city name properly'
        }

    }
}

submitbtn.addEventListener('click', getinfo)
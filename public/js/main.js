const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_Value = document.getElementById('temp_Value');
const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let city = cityName.value;
    if( city === ""){
        data_hide.classList.add('data_hide');
        city_name.innerHTML = "Please write the name of city.";
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9757e4f37f29021a0d2bb7a09a2a8c70`;
            const response = await fetch(url);
            const data = await response.json();
            temp_Value.innerText = data.main.temp;
            city_name.innerText = `${data.name}, ${data.sys.country}`;
            data_hide.classList.remove('data_hide');
        }
        catch{
            data_hide.classList.add('data_hide');
            city_name.innerHTML = `Please enter the city name properly`;
        }
    }
}

submitBtn.addEventListener('click', getInfo);
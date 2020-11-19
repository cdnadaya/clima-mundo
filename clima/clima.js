const axios = require('axios');



const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=610c3b7ac0ec6fa30efda07382f50706&units=metric`)

    return resp.data.main.temp;

}



module.exports = {
    getClima
}
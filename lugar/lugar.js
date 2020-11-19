const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '8fd40b6e9cmsh42ce4c75b98bfa3p1b2135jsnfc5444674791' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name
    const lat = data.lat
    const lng = data.log

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
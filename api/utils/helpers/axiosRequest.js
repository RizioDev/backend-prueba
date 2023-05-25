const axios = require("axios");
const { BASE_URL } = require("../constants");

const data = async () => {
  const countries = await axios.get(BASE_URL);
  const data = countries.data;

  const apiData = data.map((e) => {
    return {
      id: e.cca3,
      name: e.name.common,
      flagimg: e.flags ? e.flags[0] : "Este dato no existe",
      subregion: e.subregion ? e.subregion : "Este dato no existe",
      area: e.area,
      population: e.population,
      capital: e.hasOwnProperty("capital") ? e.capital[0] : "No capital",
      continent: e.continents ? e.continents[0] : "Este dato no existe",
      nameSpanish: e.translations.spa.official,
    };
  });
  return apiData;
};

module.exports = {
  data,
};

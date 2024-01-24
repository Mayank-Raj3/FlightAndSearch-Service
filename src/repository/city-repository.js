// we need to have the acess of the modal

const city = require("../models/city");
const { City } = require("../models/index");

class CityRepositoty {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = CityRepositoty;

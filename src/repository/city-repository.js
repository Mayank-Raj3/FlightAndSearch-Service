// we need to have the access of the modal

const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    //{name :"Delhi"} so here destructuring
    try {
      const city = await City.create({
        name,
      });
      return city;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = await city.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }
}

module.exports = CityRepository;

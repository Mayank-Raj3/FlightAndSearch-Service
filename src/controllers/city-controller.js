const { CityService } = require("../services/index");
const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    console.log(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong", error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

// form :- DELETE. → /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);

    // 200 status code success
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      err: error,
    });
  }
};

// GET → /city/:id
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);

    // 200 status code
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      err: error,
    });
  }
};

// Patch → /city/:id → req. body
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);

    // 200 status code
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated a city",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: error,
    });
  }
};

const getall = async (req, res) => {
  try {
    const response = await cityService.getAllCity();
    // 200 status code
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated a city",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getall,
};

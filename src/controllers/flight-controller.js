const { query } = require("express");
const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfully created a flight",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong", error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight",
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightData(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a flight",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the flight",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await flightService.getFlight(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a flight",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the flight",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    console.log(req.params.id, req.body);
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully Update the flight",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
  get,
  update,
};

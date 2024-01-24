const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const CityRepositoty = require("./repository/city-repository");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
    // console.log(process.env);

    const repo = new CityRepositoty();
    repo.createCity({ name: "Bangalore" });
    repo.deleteCity(1);
  });
};

setupAndStartServer();

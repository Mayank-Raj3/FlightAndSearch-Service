//  we are using common js moduling its by default

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.port,
};

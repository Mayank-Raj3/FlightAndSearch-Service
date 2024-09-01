# FlightAndSearch MicroService

## Overview

The Flight Search API is a Node.js application built with Express.js. It allows users to manage data related to cities, airports, and flights, and to perform search operations for flights. The application is structured using the MVC (Model-View-Controller) pattern and follows a repository pattern for data access.

## Features

- **City Management**: Create, read, update, and delete cities.
- **Airport Management**: Create new airports.
- **Flight Management**: Create, read, update, and search for flights.
- **Validation Middleware**: Middleware to validate flight data before creation.

## Project Structure

- **controllers/**: Contains the logic for handling requests and responses.
  - `city-controller.js`
  - `flight-controller.js`
  - `airport-controller.js`
- **middlewares/**: Contains middleware functions.
  - `flight-middlewares.js`
- **models/**: Contains the Sequelize models for interacting with the database.
  - `city.js`
  - `airport.js`
  - `flights.js`
  - `airplane.js`
- **repository/**: Contains classes that interact with the database.
  - `city-repository.js`
  - `airport-repository.js`
  - `flight-repository.js`
  - `crud-repository.js`
- **migrations/**: Contains database migration files.
- **routes/**: Defines the application routes.
- **config/**: Configuration files for the project.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mayank-Raj3/FlightAndSearch-Service.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

   Create a `.env` file in the root directory and add your environment variables.

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=yourpassword
   DB_NAME=flight_search
   ```

4. Run the database migrations:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. Start the server:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

### City Endpoints

- **Create a city**
  - `POST /city`
- **Get a city by ID**
  - `GET /city/:id`
- **Get all cities**
  - `GET /city`
- **Update a city**
  - `PATCH /city/:id`
- **Delete a city**
  - `DELETE /city/:id`

### Airport Endpoints

- **Create an airport**
  - `POST /airports`

### Flight Endpoints

- **Create a flight**
  - `POST /flights`
- **Get a flight by ID**
  - `GET /flights/:id`
- **Get all flights**
  - `GET /flights`
- **Update a flight**
  - `PATCH /flights/:id`

## Middleware

- **Flight Validation Middleware**
  - Validates flight creation requests to ensure all necessary data is provided.

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **Sequelize**: ORM for database management
- **MySQL/PostgreSQL**: Database options
- **Docker** (optional): For containerization

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

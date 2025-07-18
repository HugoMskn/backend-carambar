const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger/swagger.json');
const jokeRoutes = require('./routes/jokes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/blagues', jokeRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

module.exports = app;
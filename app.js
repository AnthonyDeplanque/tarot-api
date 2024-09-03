const express = require('express');
const dotenv = require('dotenv');

const cors = require('cors');

const cardRoutes = require('./routes/cardRoutes');
const errorHandler = require('./middlewares/errorHandler');
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use(express.static('public'));
app.use('/cards', cardRoutes)
app.use(errorHandler);

app.listen(port, ()=>console.log(`server running on port ${port}`));
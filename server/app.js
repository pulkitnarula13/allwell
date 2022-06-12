const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const patientRoutes = require('./routes/patient');
const { baseURL } = require('./constant');

require('dotenv').config();

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
        console.log(`Error connecting the database ${error}`);
    } else {
        console.log(`Connected to Allwell Database`);
    }
})

app.get('/', (req, res) => {
    res.send('All Well API');
})

app.use(`${baseURL}/patients`,patientRoutes );

app.listen(PORT, () => {
    console.log(`All well server running at port ${PORT}`);
})

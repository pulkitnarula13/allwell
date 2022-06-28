const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const patientRoutes = require("./routes/patient");
const morgan = require('morgan');
const doctorRoutes = require("./routes/doctor");

const { baseURL } = require("./constant");

require("dotenv").config();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json({ limit: "50mb"}));


mongoose.connect(process.env.MONGO_URI, (error) => {
  if (error) {
    console.log(`Error connecting the database ${error}`);
  } else {
    console.log(`Connected to Allwell Database`);
  }
});

app.get("/", (req, res) => {
  res.send("All Well API");
});

app.use(`${baseURL}/patients`, patientRoutes);
app.use(`${baseURL}/doctors`, doctorRoutes);

app.listen(PORT, () => {
  console.log(`All well server running at port ${PORT}`);
});

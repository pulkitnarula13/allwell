const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// swaggerDoc
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const PORT = process.env.PORT || 8080;
const patientRoutes = require("./routes/patient");
const morgan = require("morgan");
const doctorRoutes = require("./routes/doctor");
const appointmentRoutes = require("./routes/appointment");
const qnaRoutes = require("./routes/qna");
const doctorReview = require("./routes/doctorReview");
const familyMemberRoutes = require('./routes/familyMember');

require("dotenv").config();

app.use(cors({
  origin: "*"
}));

app.use(morgan("dev"));
app.use(express.static('web'));

app.use(express.json({ limit: "50mb" }));

// Swagger doc

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Medico API",
      description: "Medico API Information",
      contact: {
        name: "Medico Developers",
      },
      servers: ["http://localhost:8080"],
    },
  },
  apis: ["./routes/*.js", "app.js"],
  // apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

mongoose.connect(process.env.MONGO_URI, (error) => {
  if (error) {
    console.log(`Error connecting the database ${error}`);
  } else {
    console.log(`Connected to Allwell Database`);
  }
});
// Routes
/**
 * @swagger
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get("/", (req, res) => {
  res.status(200).send("All Well API");
});

app.use(`patients`, patientRoutes);
app.use(`doctors`, doctorRoutes);
app.use(`appointments`, appointmentRoutes);
app.use(`qna`, qnaRoutes);
app.use(`doctorReview`, doctorReview);
app.use(`familyMember`, familyMemberRoutes);


app.listen(PORT, () => {
  console.log(`All well server running at port ${PORT}`);
});

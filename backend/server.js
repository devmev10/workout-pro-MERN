require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");

//Create my express app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/workouts", workoutRoutes);

// Connect to Mongo DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests on server
    app.listen(process.env.PORT, () => {
      console.log("DB connected AND listening on port:", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

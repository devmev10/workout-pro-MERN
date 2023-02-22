require("dotenv").config();
const express = require("express");
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

// Listen for requests on server
app.listen(process.env.PORT, () => {
  console.log("listening on port:", process.env.PORT);
});

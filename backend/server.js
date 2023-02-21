require("dotenv").config();
const express = require("express");

//Create my express app
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome here" });
});

// Listen for requests on server
app.listen(process.env.PORT, () => {
  console.log("listening on port:", process.env.PORT);
});

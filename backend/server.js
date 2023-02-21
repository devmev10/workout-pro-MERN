const express = require("express");

//Create my express app
const app = express();

//Routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome here" });
});

// Listen for requests on server
app.listen(5000, () => {
  console.log("listening on port 5000");
});

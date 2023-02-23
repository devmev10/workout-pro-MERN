const express = require("express");

// import Controller
const { createWorkout } = require("../controllers/workoutController");

const router = express.Router();

// Get all the workouts
router.get("/", (req, res) => {
  res.json({ msg: "My workouts" });
});

//Get single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "Get single workout" });
});

// Create a new workout
router.post("/", createWorkout);

// Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a workout" });
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a workout" });
});

module.exports = router;

const express = require("express");

// import Controller
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require("../controllers/workoutController");

const router = express.Router();

// Get all the workouts
router.get("/", getWorkouts);

//Get single workout
router.get("/:id", getWorkout);

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

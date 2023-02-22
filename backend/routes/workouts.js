const express = require("express");

// import workout model
const Workout = require("../models/workoutModel");

const router = express.Router();

// Get all the workouts
router.get("/", (req, res) => {
  res.json({ msg: "My workouts" });
});

//Get single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "Get single workout" });
});

// Post a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a workout" });
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a workout" });
});

module.exports = router;

const express = require("express");
const route = express.Router();
const { getAllUser, addUser } = require("../controller/user.controller");
const {
  getAllExercise,
  addExercise,
  updateExercise,
  deleteExercise
} = require("../controller/exercise.controller");

// users
route.get("/user", getAllUser);
route.post("/user/add", addUser);

// exercise
route.get("/exercise", getAllExercise);
route.post("/exercise/add", addExercise);
route.post("/exercise/update/:id", updateExercise);
route.post("/exercise/delete/:id", deleteExercise);

module.exports = route;

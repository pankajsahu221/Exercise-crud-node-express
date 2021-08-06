const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseModel = new Schema(
  {
    username: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const Exercisedb = mongoose.model("Exercisedb", exerciseModel);

module.exports = Exercisedb;

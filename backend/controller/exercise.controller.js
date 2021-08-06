var Exercisedb = require("../model/exercise.model");

exports.getAllExercise = (req, res) => {
  try {
    Exercisedb.find((err, data) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json(data);
      }
    });
  } catch (e) {
    console.log(e);
  }
};

exports.addExercise = (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "Content should not be empty" });
      return;
    }
    const exercise = {
      username: req.body.username,
      description: req.body.description,
      duration: Number(req.body.duration),
      date: Date.parse(req.body.date)
    };

    Exercisedb.create(exercise, (err, data) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json("Exercise Added");
      }
    });
  } catch (e) {
    console.log(e);
  }
};

exports.updateExercise = (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "Content should not be empty" });
      return;
    }

    const userdata = {
      username: req.body.username,
      description: req.body.description,
      duration: Number(req.body.duration),
      date: Date.parse(req.body.date)
    };

    Exercisedb.findOne({ _id: req.params.id }, (err, foundExercise) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        foundExercise.username = userdata.username;
        foundExercise.description = userdata.description;
        foundExercise.duration = userdata.duration;
        foundExercise.date = userdata.date;

        foundExercise.save();
        res.status(200).json("User updated");
      }
    });
  } catch (e) {
    console.log(e);
  }
};

exports.deleteExercise = (req, res) => {
  try {
    Exercisedb.deleteOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json("Exercise deleted");
      }
    });
  } catch (e) {
    console.log(e);
  }
};

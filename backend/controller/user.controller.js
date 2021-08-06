var Userdb = require("../model/user.model");

// get all the users
exports.getAllUser = (req, res) => {
  try {
    Userdb.find((err, data) => {
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

exports.addUser = (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "Content should not be empty" });
      return;
    }
    const user = {
      username: req.body.username
    };

    Userdb.create(user, (err, data) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json("User added");
      }
    });
  } catch (e) {
    console.log(e);
  }
};

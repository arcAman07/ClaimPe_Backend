require("dotenv").config();
const mongoose = require("mongoose");
const userSchema = require("../models/user");
const User = mongoose.model("User", userSchema);

exports.postUser = (req, res, next) => {
  const registerNumber = req.body.regNo;
  bcrypt.genSalt(parseInt(saltRounds), (err, salt) => {
    bcrypt.hash(req.body.regNo, salt, (error, hash) => {
      if (!error) {
        const newUser = new User({
          name: req.body.name,
          dob: req.body.dob,
          regNo: req.body.regNo,
          hashReg: hash,
        });
        newUser.save((err) => {
          if (err) {
            console.log(err);
            res.send(err);
          } else {
            console.log("Successfully added the new user");
            res.send("Successfully added the new user");
          }
        });
      } else {
        console.log(error);
        res.send(error);
      }
    });
  });
};

exports.getAllUsers = (req, res, next) => {
  User.find((err, results) => {
    if (!err) {
      res.send(results);
    } else {
      console.log(err);
      res.send(err);
    }
  });
};

exports.getUser = (req, res, next) => {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (!err) {
      res.send(user);
    } else {
      console.log(err);
      console.log(user);
    }
  });
};

exports.getUserByRegNo = (req, res, next) => {
  User.findOne({ regNo: req.params.id }, (err, user) => {
    if (!err) {
      res.send(user);
    } else {
      console.log(err);
      console.log(user);
    }
  });
};
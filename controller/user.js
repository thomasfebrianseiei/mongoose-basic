const User = require("../model/user");

module.exports = {
  getAll: (req, res) => {
    User.find((error, result) => {
      if (error) {
        res.status(400).send({
          massage: `user failed`,
          error
        });
      } else {
        res.status(200).send({
          message: `All users get`,
          result
        });
      }
    }).populate("address","address -_id") 
  },
  getOne: (req, res) => {
    User.findOne({ name: req.body.name }, (error, result) => {
      if (error) {
        res.status(400).send({
          massage: `can't find one`,
          error
        });
      } else {
        res.status(200).send({
          message: `we find it`,
          result
        });
      }
    });
  },
  addUser: (req, res) => {
    const newUser = new User(req.body);
    newUser.save((error, result) => {
      if (error) {
        res.status(400).send({
          massage: `user failed to create`,
          error
        });
      } else {
        res.status(200).send({
          message: `user created`,
          result
        });
      }
    });
  },
  deleteUser: (req, res) => {
    User.findOneAndDelete({ _id: req.params.id }, (error, result) => {
      if (error) {
        res.status(400).send({
          massage: `user failed to delete`,
          error
        });
      } else {
        res.status(200).send({
          message: `user delete`,
          result
        });
      }
    });
  },
  updateUser: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, (error, result) => {
      if (error) {
        res.status(400).send({
          massage: `user failed to update`,
          error
        });
      } else {
        res.status(200).send({
          message: `user update`,
          result
        });
      }
    });
  }
};

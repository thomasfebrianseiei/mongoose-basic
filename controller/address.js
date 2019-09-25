const Address = require("../model/address");
const User = require("../model/user");

module.exports = {
  addAddress: async (req, res) => {
    const address = await Address.create({ address: req.body.address });
    const user = await User.findOneAndUpdate(
      { _id: req.body._id },
      { $push: { address: address._id } },
      { new: true }
    );
    try {
      res.status(200).send({
        massage: "Created new address success",
        address,
        user
      });
    } catch (error) {
      res.status(400).send({
        massage: `failed to created new address`,
        error
      });
    }
  }
};

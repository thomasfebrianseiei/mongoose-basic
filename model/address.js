const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var addressSchema = new Schema (
    {
        address: { type: String, require: true}
    },
    {
        timestamps:true
    }
);

const Address = mongoose.model("address", addressSchema);
module.exports = Address
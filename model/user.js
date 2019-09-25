const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        name: {type: String, required:true},
        password:{type: String, required:true},
        email: {type: String, required:true},
        phone: {type: String, required:true},
        address: [
            {
                type: Schema.Types.ObjectId,
                ref: "address"
            }
        ]
    },
    {timestamps:true}
);

const User = mongoose.model("users",userSchema)
module.exports = User;
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profilePic:{
        type:String,
        default: "https://images.pexels.com/photos/1629780/pexels-photo-1629780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
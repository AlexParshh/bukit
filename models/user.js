const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Item = require("./item");


const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    items: [Item.ItemSchema]
    
  });
  
module.exports = User = mongoose.model("users", UserSchema);


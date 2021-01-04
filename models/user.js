const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// status is true if item has been completed, false otherwise.
const ItemSchema = new Schema({
  itemName: {
    type: String,
    required: true
  },
  itemDesc: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
})


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
    items: [ItemSchema]
    
  });
  
module.exports = User = mongoose.model("users", UserSchema);


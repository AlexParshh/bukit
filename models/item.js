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
  finishedStatus: {
    type: Boolean,
    required: true
  }
})

const ItemModel = mongoose.model("items", ItemSchema);

module.exports = {ItemSchema:ItemSchema, Item: ItemModel}
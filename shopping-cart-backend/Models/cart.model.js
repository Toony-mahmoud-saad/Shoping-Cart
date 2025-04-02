const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newCart = new Schema({
  name: String,
  price: Number,
  quantity: Number
})

module.exports = mongoose.model("cart",newCart);


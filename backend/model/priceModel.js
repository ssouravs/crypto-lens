const mongoose  = require("mongoose");

const priceSchema = new mongoose.Schema({
  name:String,
  symbol: String,
  price: Number,
  timestamp: Date,
});
const Price = mongoose.model('Price', priceSchema);

module.exports = Price;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  collection: { type: mongoose.Schema.Types.ObjectId, ref: "Collection" },
  price: { type: Number, required: true },
  cutPrice: { type: Number, required: true },
  description: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

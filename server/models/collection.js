const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // Reference to the Product model
    },
  ],
});

const Collection = mongoose.model("collection", collectionSchema);

module.exports = Collection;

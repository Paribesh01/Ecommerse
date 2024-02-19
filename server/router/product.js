const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const User = require("../models/user");
const auth = require("../middle/auth");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/add", auth, async (req, res) => {
  try {
    const { name, price, cutPrice, description } = req.body;
    const token = req.cookies.token;

    const verified = jwt.verify(token, process.env.SECRET);
    const userId = verified.user;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const newProduct = new Product({
      name: name,
      price: price,
      cutPrice: cutPrice,
      description: description,
      userId: userId,
    });

    await newProduct.save();

    user.product.push(newProduct);
    await user.save();

    console.log(
      `${newProduct.name} is created and added to user ${user.email}!!`
    );
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/showall", auth, async (req, res) => {
  const token = req.cookies.token;
  const verified = jwt.verify(token, process.env.SECRET);
  const userId = verified.user;
  await Product.find({ userId: userId })
    .then((products) => {
      console.log("found all the blogs");
      res.status(200).json(products);
    })
    .catch((err) => {
      console.log("error while find all the blogs" + err);
      res.status(500).json({ error: "Error while find all blogs" });
    });
});

router.get("/get/:id", auth, async (req, res) => {
  await Product.findById(req.params.id)
    .then((product) => {
      console.log("found the blog " + product.name);
      res.status(200).json(product);
    })
    .catch((err) => {
      console.log("error while finding blog by id " + err);
      res.status(500).json({ error: "error while finding blog by id " });
    });
});

router.delete("/delete/:id", auth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      console.log(product.name + " is deleted");
      res.status(200).json(product.name + " Deleted success fully");
    })
    .catch((err) => {
      console.log("error while deleting blog " + err);
      res.status(500).json({ error: "Error while deleting blog." });
    });
});

router.delete("/deleteall", async (req, res) => {
  try {
    // Delete all documents from the Blog collection
    await Product.deleteMany({});
    res.send("All documents deleted from the Blog collection.");
  } catch (error) {
    console.error("Error occurred while deleting documents:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

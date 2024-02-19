const express = require("express");
const router = express.Router();
const collection = require("../models/collection");
const User = require("../models/user");
const auth = require("../middle/auth");
const jwt = require("jsonwebtoken");
const { Collection } = require("mongoose");
require("dotenv").config();

router.post("/add", auth, async (req, res) => {
  try {
    const { name } = req.body;
    const token = req.cookies.token;

    const verified = jwt.verify(token, process.env.SECRET);
    const userId = verified.user;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const newCollection = new CollnewCollection({
      name: name,
      userId: userId,
    });

    await newProduct.save();

    user.collection.push(newCollection);
    await user.save();

    console.log(
      `${newCollection.name} is created and added to user ${user.email}!!`
    );
    res.status(201).json(newCollection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/showall", auth, async (req, res) => {
  const token = req.cookies.token;
  const verified = jwt.verify(token, process.env.SECRET);
  const userId = verified.user;
  await Collection.find({ userId: userId })
    .then((collections) => {
      console.log("found all the blogs");
      res.status(200).json(collections);
    })
    .catch((err) => {
      console.log("error while find all the blogs" + err);
      res.status(500).json({ error: "Error while find all blogs" });
    });
});

router.get("/get/:id", auth, async (req, res) => {
  await Collection.findById(req.params.id)
    .then((collection) => {
      console.log("found the blog " + collection.name);
      res.status(200).json(collection);
    })
    .catch((err) => {
      console.log("error while finding blog by id " + err);
      res.status(500).json({ error: "error while finding blog by id " });
    });
});

router.delete("/delete/:id", auth, async (req, res) => {
  await Collection.findByIdAndDelete(req.params.id)
    .then((collection) => {
      console.log(collection.name + " is deleted");
      res.status(200).json(collection.name + " Deleted success fully");
    })
    .catch((err) => {
      console.log("error while deleting blog " + err);
      res.status(500).json({ error: "Error while deleting blog." });
    });
});

router.delete("/deleteall", async (req, res) => {
  try {
    // Delete all documents from the Blog collection
    await Collection.deleteMany({});
    res.send("All documents deleted from the Blog collection.");
  } catch (error) {
    console.error("Error occurred while deleting documents:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

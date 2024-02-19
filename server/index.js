const express = require("express");
const dbconn = require("./dbconn");
const cors = require("cors");
const userRouter = require("./router/user");

const app = express();

require("dotenv").config();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Handle preflight requests for all routes
app.options("*", cors());

app.use("/user", userRouter);

app.listen(4000, (req, res) => {
  console.log("Listening to the port 4000.");
  dbconn();
});

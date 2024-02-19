const express = require("express");
const dbconn = require("./dbconn");
const cors = require("cors");
const userRouter = require("./router/user");
const productRouter = require("./router/product");
const authRouter = require("./middle/authfront");
const cookieParser = require("cookie-parser");

const app = express();

require("dotenv").config();
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Handle preflight requests for all routes
app.options("*", cors());

app.use("/verify", authRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(4000, (req, res) => {
  console.log("Listening to the port 4000.");
  dbconn();
});

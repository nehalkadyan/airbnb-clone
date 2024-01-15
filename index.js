const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/auth.route");
const uploadRouter = require("./routes/upload.route");
const accomodationRouter = require("./routes/accomodation.route");

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://kadyannehal333:1SL3uXNYTrc9xT9g@cluster0.yn0i8ra.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api", uploadRouter);
app.use("/api/accomodation", accomodationRouter);

app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/test", (req, res) => {
  return res.json({ message: "connected to port 4000" });
});

app.listen(4000);

// 1SL3uXNYTrc9xT9g

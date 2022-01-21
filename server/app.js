const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/user.js");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

mongoose.connect(
  "mongodb+srv://dilshodDCI:dilshodDCI123@cluster0.ldws3.mongodb.net/validation?retryWrites=true&w=majority",
);

mongoose.connection.on("error", console.error);
mongoose.connection.on("open", () => {
  console.log("Database connected ....");
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", usersRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Connected to port: ", port);
});

require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const authRouter = require("./routes/auth");
const movieRouter = require("./routes/movie");
const cors = require("cors");
const PORT = 5000;
app.use(bodyParser.json());
app.use(cors());

app.use("/", authRouter);
app.use("/data", movieRouter);

app.get("/", (req, res) => {
  res.send("server is online");
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("DB connected.")
);

app.listen(PORT, () => console.log(`The server is online at port ${PORT}`));

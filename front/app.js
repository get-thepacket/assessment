const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");

app.use(express.static("pages"));
app.use(cors());
// app.get("/", (req, res) => {
//   res.sendFile("");
// });

app.listen(PORT, () => console.log(`front is online at ${PORT}`));

const express = require("express");
const app = express();
const cors = require("cors");
const categories = require("./Data/Categories.json");
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon News Server Is Runnig");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Dragon News Server Is Running On Port: ${port}`);
});

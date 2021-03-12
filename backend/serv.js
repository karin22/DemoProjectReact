const express = require("./config/express");

const app = express();
// const mongoose = require("mongoose");
// const db = mongoose.connect("mongodb://localhost:27017/testResApi", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;

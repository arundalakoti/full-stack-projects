// // *********************2******************

const express = require("express");
const app = express();

const PORT1 = 3000;
let counter = 0;

app.get("/", (req, res) => {
  res.send({ counter: counter });
});

app.get("/increment", (req, res) => {
  counter++;
  res.send({ counter: counter });
});

app.get("/decrement", (req, res) => {
  counter--;
  res.send({ counter: counter });
});

app.listen(PORT1, () => {
  console.log("Server is up at port: ", PORT1);
});

// // *********************2******************

const express = require("express");
const app = express();

// *********************4******************
const PORT = 4000;

app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 1000);
  console.log(randomNumber);

  res.send({ random: randomNumber });
});

app.listen(PORT, () => {
  console.log("Server is up at port: ", PORT);
});

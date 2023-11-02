import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.listen(port, () => {
  console.log(`backend listening at http://localhost:${port}`);
});

const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Men & Women Dummy Data");
});

app.get("/other", (req, res) => {
  res.send("Page not found");
});

app.listen(PORT, () => {
  console.log("Server started in port: ", PORT);
});

const http = require("http");

const options = {
  hostname: "fakestoreapi.com",
  path: "/products",
  method: "GET",
};

const req = http.request(options, (res) => {
  res.on("data", (d) => {
    console.log("Data from api: ", d.toString());
  });
});

req.on("error", (e) => {
  console.log("Error on data fetching: ", e);
});

req.end();

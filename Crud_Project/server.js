const app = require("./app");

const PORT = process.env.PORT || 6000; //in app.js (require("dotenv").config();)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

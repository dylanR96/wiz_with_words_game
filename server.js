const app = require("./src/app.js");
const mongoose = require("mongoose");
const database = "wizwithwords";
const collection = "users";
const url = `mongodb://localhost:27017/${database}`;

// Connect to MongoDB
mongoose
  .connect(url)
  .then(() => console.log("Successfully connected to database"))
  .catch((error) => console.log(error.message));

app.listen(8000, () => {
  console.log("Server running on 8000");
});

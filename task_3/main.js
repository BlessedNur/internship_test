// Required dependencies 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./src/routes/books.routes");
const app = express();

// cors (optional) for frontend access 
app.use(cors());
app.use(express.json());

// mongodb connnection
mongoose
  .connect(
    "mongodb+srv://blessednur67:HOODQUAN67@cluster0.wftw5hq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
  // routes
    app.use("/api/books", bookRoutes);
    console.log("Connected to MongoDB");
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));

const PORT = 5000;
// server initialization
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

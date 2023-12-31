const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const categoryRoutes = require("./routes/categories");
const subcategoryRoutes = require("./routes/subcategories");
const listingRoutes = require("./routes/listings");
const businessRoutes = require("./routes/businessRoutes");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();
const app = express();
app.use(cors());

app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Event listeners for connection status
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB successfully!");
});
db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});
// Use the routes
app.use("/categories", categoryRoutes, subcategoryRoutes);

app.use("/listings", listingRoutes);
app.use("/auth", authRoutes);
app.use("/businesses", businessRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

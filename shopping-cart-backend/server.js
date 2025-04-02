require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); //
const CartRoute = require("./Route/cart.route")

const app = express();
app.use(express.json());
app.use(cors()); //

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

//! Cart route
app.use("/", CartRoute);


// Start Server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

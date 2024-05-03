// const bodyParser = require("body-parser");
// const express = require("express");
// const mongoose = require("mongoose");
// // var db = "mongodb://127.0.0.1:27017/testdb";
// // mongoose.connect(db);

// const dbURI =
//   "mongodb+srv://saimmasood06:raoxJVephR3jWTFQ@cluster0.itxqh2t.mongodb.net/Uber?retryWrites=true&w=majority";

// const app = express();
// const PORT = dbURI || 3000;

// app.use(express.json());

// mongoose
//   .connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// // const authRoutes = require("./routes/authRoutes");
// // const rideRoutes = require("./routes/rideRoutes");

// // app.use("/api/auth", authRoutes);
// // app.use("/api/ride", rideRoutes);

const express = require("express");
// const morgan = require('morgan');
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
// const pbkdf2 = require('pbkdf2');
// const Customer = require('./Models/customers');
// const Admin = require('./Models/admin');
// const Product = require('./Models/products');
// const Discount = require('./Models/discount');
// const Cart = require('./Models/cart');
// const Order = require('./Models/order');
// const generateString = require('./helperFunctions');
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const { WrongLocation } = require('@mui/icons-material');

const app = express();
// var corsOptions = {
//   origin: "http://localhost:3000",
// };

const dbURI =
  "mongodb+srv://saimmasood06:raoxJVephR3jWTFQ@cluster0.kjgf5le.mongodb.net/Uber?retryWrites=true&w=majority";

const server = app.listen(8000, () => {
  console.log("App is running on port:", 8000);
});

// Database connecting to Backend Server
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("Successfully connected to Database"))
  .catch((err) => console.log(err));

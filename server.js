const express = require("express");
const app = express();
const dotenv = require("dotenv");
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/author");

// Load config
dotenv.config({ path: "./config/config.env" });

//  Connect to Database
const connectDB = require("./config/db");
connectDB();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.use("/", indexRouter);
app.use("/authors", authorRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT);

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");


dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = express();



app.use(cors());
app.use(express.json());

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

app.get("/", (req, res) => {
    res.send("SDG Web Application API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});

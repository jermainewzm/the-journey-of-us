const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth-routes")
const memoryRoutes = require("./routes/memory-routes")

dotenv.config({ path: "./config.env" });

const server = express();


server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.set("view engine", "ejs");
server.use(express.static("public"));

server.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

server.use("/", authRoutes)
server.use("/", memoryRoutes)

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}

function startServer() {
    const hostname = "0.0.0.0"
    const port = process.env.PORT || 8000
    server.listen(port, hostname, () => {
        console.log(`Server running on port ${port}`)
    })
}
connectDB().then(startServer);
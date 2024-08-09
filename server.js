const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const db = require("./connection");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candidateRoutes");

// middleware to parse incoming body requests
app.use(express.json());

// routes
app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Listening on port ${port}!`));

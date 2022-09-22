// import express from "express";
const express = require("express");
const taskRoutes = require("./routes/tasks.routes");
import cors from "cors";
// holis!
// import taskRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

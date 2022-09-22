const express = require("express");
// import express from "express";
// import taskRoutes from "./api/products";
const product = require("./api/products");

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/productt", product);

app.listen(PORT, () => console.log(`Server is runnig in port ${PORT}`));

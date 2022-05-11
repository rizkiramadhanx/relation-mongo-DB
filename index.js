import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import GlobalRouterOneToOne from "./one-to-one/routes/route.js";

const app = express();

app.listen();
dotenv.config();
connectDB();
app.use(express.json());

app.use("/api/onetoone", GlobalRouterOneToOne);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Running on port ${PORT}`));

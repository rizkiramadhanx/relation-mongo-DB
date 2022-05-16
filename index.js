import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import GlobalRouterOneToOne from "./one-to-one/routes/route.js";
import GlobalRouterOneToMany from "./one-to-many/routes/route.js";
const app = express();

app.listen();
dotenv.config();
connectDB();
app.use(express.json());

app.use("/api/onetoone", GlobalRouterOneToOne);

app.use("/api/onetomany", GlobalRouterOneToMany);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Running on port ${PORT}`));

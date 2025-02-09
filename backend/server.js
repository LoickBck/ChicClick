import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import {connectDB} from "./lib/db.js";

dotenv.config();

const app = express();
console.log(process.env.PORT);

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes)

app.listen (5000, () => {
    console.log("Le serveur à demarré sur http://localhost:" + PORT)
    connectDB();
});
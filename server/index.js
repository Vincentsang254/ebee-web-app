/** @format */
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
// Database models
import db from "./models/index.js";

dotenv.config();

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import userAddressRoutes from "./routes/userAddressRoutes.js";
import ratingRoutes from "./routes/ratingRoutes.js";

const app = express();

// Set up the port dynamically for production
const port = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.CLIENT_URL || "https://ebee-app.onrender.com", // Use env var for production URL
  credentials: true,
}));

app.use(express.json()); // For parsing JSON bodies
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/address", userAddressRoutes);
app.use("/api/ratings", ratingRoutes);

app.get("/test", (req, res) => {
  res.status(200).send("Backend is working.js");
});

const __dirname = path.resolve();

// Production settings to serve React frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
  });
}

// Sync DB and start server
db.sequelize.sync().then(() => {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
  });
});

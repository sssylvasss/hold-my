"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const imageRoutes_1 = __importDefault(require("./routes/imageRoutes"));
const ensureDirectories_1 = require("./utils/ensureDirectories");
// Load environment variables
dotenv_1.default.config();
// Ensure required directories exist
(0, ensureDirectories_1.ensureDirectories)();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Serve uploaded files
app.use("/uploads", express_1.default.static("uploads"));
// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/hold-my-db";
mongoose_1.default
    .connect(MONGODB_URI)
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
// Routes
app.use("/api/images", imageRoutes_1.default);
// Basic route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Hold My Beer API" });
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});
// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

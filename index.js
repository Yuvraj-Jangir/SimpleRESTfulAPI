const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(logger);

// Routes
app.use("/", userRoutes);

// Error handling for unknown routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
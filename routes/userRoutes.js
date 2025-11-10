const express = require("express");
const router = express.Router();
const users = require("../data/users");
const validateUser = require("../middleware/validate");

// GET all users
router.get("/users", (req, res) => {
    res.status(200).json(users);
});

// GET user by ID
router.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
});

// POST new user
router.post("/user", validateUser, (req, res) => {
    const { firstName, lastName, hobby } = req.body;
    const newUser = {
        id: (users.length + 1).toString(),
        firstName,
        lastName,
        hobby,
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT update user
router.put("/user/:id", validateUser, (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const { firstName, lastName, hobby } = req.body;
    user.firstName = firstName;
    user.lastName = lastName;
    user.hobby = hobby;

    res.status(200).json(user);
});

// DELETE user
router.delete("/user/:id", (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: "User not found" });

    const deletedUser = users.splice(index, 1);
    res.status(200).json(deletedUser[0]);
});

module.exports = router;
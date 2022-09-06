const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.send({
        status:true,
        data: [],
        message: "Hello"
    });
});

router.get("/posts", async (req, res) => {
    res.send({
        status:true,
        data: ["First", "Second", "Third"],
        message: "Success"
    });
});


module.exports = router;
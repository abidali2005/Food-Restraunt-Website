const express = require("express");
const router = express.Router();

router.post("/displaydata", async (req, res) => {
    try {
        res.json({ data: global.fooditems, catData: global.foodCategory });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
})

module.exports = router;
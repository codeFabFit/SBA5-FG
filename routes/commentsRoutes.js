const express = require('express')
const router = express.Router();

const comments = require('../data/comments')

// get all the comments this is INDEX 

router.get("/comments", (req, res) => {
    res.json(comments);
});


router.get("/:id", (req, res) => {
    res.json(comments);
});


module.exports = router;
const express = require('express')
const router = express.Router();

const users = require('../data/users')

// index - get all the users 

router.get("/", (req, res) => {
    console.log(users)

    res.json(users)
})

// show specific user
router.get("/:id", (req, res, next) => {
    const user = users.find((u) => u.id == req.params.id);
    if (user) res.json(user);
    else next();
})
module.exports = router;
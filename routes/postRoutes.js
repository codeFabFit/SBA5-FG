const express = require('express')
const router = express.Router();

const posts = require("../data/posts")

// index - get all the post 

router.get("/", (req, res)=> {
    res.json(posts);
});

router.get("/:id", (req, res, next) => {
    const post = posts.find((p) => p.id == req.params.id);
  
    if (post) res.json(post);
    else next();
  });

module.exports = router;

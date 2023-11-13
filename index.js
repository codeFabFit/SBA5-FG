console.log("girl, you did that")
const express = require("express");
const app = express();
const port = 3000;

// const users = require("./data/users")
const users = require('./routes/userRoutes')
// const posts = require("./data/posts")
const posts = require('./routes/postRoutes')
// const comments = require("./data/comments")
const comments = require('./routes/commentsRoutes')
const bodyParser = require("body-parser")
app.set('view engine','ejs')
app.get('/:userRoutes', (req, res) => {
    res.render('index', {userRoutes: {user: req.params.userRoutes}});
})
app.set('view engine', "ejs") 
app.get('/:postRoutes', (req, res) => {
    res.render('index', {postRoutes: {posts: req.params.postRoutes}} )
})
app.set('view engine', "ejs") 
app.get("/api/users/:id", (req, res) => {
    const options = {
        title: "Welcome to the ViewNextwork",
        content:
          "Here, we've created a basic template engine using <code>app.engine()</code> \
          and the <code>fs</code> module, then used <code>res.render</code> to \
          render this page using custom content within the template.<br><br> \
          Generally, you won't want to create your own view engines, \
          but it important to understand how they work behind the scenes. \
          For a look at some popular view engines, check out the documentation for \
          <a href='https://pugjs.org/api/getting-started.html'>Pug</a>, \
          <a href='https://www.npmjs.com/package/mustache'>Mustache</a>, or \
          <a href='https://www.npmjs.com/package/ejs'>EJS</a>. \
          More complete front-end libraries like React, Angular, and Vue \
          also have Express integrations.",
      };
    
      res.render("posts", options);
})

// middleware  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/api/users', users)
app.use('/api/posts', posts)
app.use('/api/comments', comments)



// home route


// =======USER======= // 
app.get("/users", (req, res) => {
    res.send("Check Out Your Friends")
})
// ======POSTS====== //
app.get("/posts", (req, res) => {
    res.send("See What Your Favorite Quotes Here")
})
// ======COMMENTS======// 
app.get("/comments", (req, res) => {
    res.send("Check out what your friends think")
})
//see all post
// app.get("/api/posts", (req, res) => {
//     res.json(posts)
// })

// app.get("/api/users/:id/post", (req, res) => {
//     res.send("See who said what specifically")
// })



// app.get("/api/comments", (req, res) => {
//     res.json(comments)
// })

/// the view section // didnt work with follow along video

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '')
// })
// app.get('/post', (req, res) => {
//     res.sendFile(__dirname + '/post.js')
// })
// app.get('/post', (req, res) => {
//     res.sendFile(__dirname + '/comments.js')
// })
app.get('/user/:id', (req, res) => {
    res.render('user', {person: req.params.id})
})

// custom middleware : 404 not found
app.use((req, res) => {
    res.status(404);
    res.json({ error: "Resource not found" });
  });
  

// making sure port is working with server
app.listen(port, () => {
    console.log(`server is listening to port: ${port}`)
})
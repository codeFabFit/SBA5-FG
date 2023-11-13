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

// middleware  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/api/users', users)
app.use('/api/posts', posts)
app.use('/api/comments', comments)
app.set('view engine','ejs')


// home route
app.get("/", (req, res) => {
    res.send("Welcome to our Community")
})

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

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/users.js')
})
app.get('/post', (req, res) => {
    res.sendFile(__dirname + '/post.js')
})
app.get('/post', (req, res) => {
    res.sendFile(__dirname + '/comments.js')
})
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
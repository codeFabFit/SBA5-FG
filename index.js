console.log("girl, you did that")
const express = require("express");
const app = express();
const port = 3000;
const fs = require('fs')

// const users = require("./data/users")
const users = require('./routes/userRoutes')
// const posts = require("./data/posts")
const posts = require('./routes/postRoutes')
// const comments = require("./data/comments")
const comments = require('./routes/commentsRoutes')
const bodyParser = require("body-parser")

app.use(express.static("./views/index"));
app.engine("index", (filePath, options, callback) => {
    fs.readFile(filePath, (err, content)=> {
        if (err) return callback(err)
    }) 
})
//users 
app.set('view engine','ejs')
// the below code was overriding the output 
// app.get('/api/users', (req, res) => {
   
//     console.log("hi")
//     // res.render('index', {userRoutes: {user: req.params.userRoutes}});
// })
//posts
app.set('view engine', "ejs") 
app.get('/api/posts', (req, res) => {
    res.render('posts.ejs', {postRoutes: {posts: req.params.postRoutes}} )
})
// comments 
app.set('view engine', "ejs") 
app.get('/api/comments', (req, res) => {
      res.render("comments.ejs", {commentsRoutes: {comments: req.params.commentsRoutes}});
})

// middleware  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/api/users', users)
app.use('/api/posts', posts)
app.use('/api/comments', comments)



// home route


// =======USER======= // 
// app.get("/users", (req, res) => {
//     res.send("Check Out Your Friends")
// })
// ======POSTS====== //
// app.get("/posts", (req, res) => {
//     res.send("See What Your Favorite Quotes Here")
// })
// ======COMMENTS======// 
// app.get("/comments", (req, res) => {
//     res.send("Check out what your friends think")
// })
//see all post
// app.get("/api/posts", (req, res) => {
//     res.json(posts)
// })

// app.get("/api/users/:id/post", (req, res) => {
//     res.send("See who said what specifically")
// })



app.get("/api/comments/:id", (req, res) => {
    res.json(comments)
})

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
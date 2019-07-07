const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');
const cors = require('cors');

require('./configurations/config');
const AuthenticateMiddleWare = require('./middleware/authenticate');
const book = require('./routes/book.route');
const user = require('./routes/user.route');
const authenticate = require('./routes/authentication.router');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// test user 
app.get("/api/current_user",(req,res) => {
    res.send(req.user);
});

// end test user

app.use('/users',authenticate);
app.use(AuthenticateMiddleWare);
app.get("/api/healthchecker",(req,res) => {
    res.send({status : 200,message : "Server working....."});
});

app.use('/books',book);
app.use('/users',user);



app.listen(PORT,(req,res) => {
    console.log(`Server start POST ${PORT}`);
})
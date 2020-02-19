require('./config/config');
require('./models/db');
require("./models/user.model");
require("./models/profile.model");
require("./models/post.model");
require("./models/bid.model");
require("./models/spam.model");
require('./config/passportConfig');
require("./models/review.model");
require("./models/order.model");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const rtsIndex = require('./routes/index.router');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);
app.use(passport.initialize());

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});


app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
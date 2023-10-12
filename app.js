require ('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const client = require('./connect.js');

const pg = require('pg');

const session = require('express-session');
const passport = require('passport');

const pgSession = require('connect-pg-simple')(session);


const app = express();
const port = 5000 || process.env.PORT;

const pgPool = new pg.Pool(client);

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new pgSession({
        pool: pgPool,
        tableName: 'session',
    }
    )}
    ));

app.use(passport.initialize());
// app.use (passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to database
// client();

// static files
app.use(express.static('public'));

// template engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/auths'));
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard.js'));



// Handle 404
app.get('*', (req, res) => {
    res.status(404).render('404');
}
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);
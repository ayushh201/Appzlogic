const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => res.render('home'));

app.get('/login', (req, res) => res.render('login'));
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Login:', email, password);
    res.redirect('/');
});

app.get('/signup', (req, res) => res.render('signup'));
app.post('/signup', (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    console.log('Signup:', name, email, password, confirmPassword);
    res.redirect('/login');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

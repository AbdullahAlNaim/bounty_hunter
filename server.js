const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');
const mongoose = require('mongoose');

const current = require('./localdb');

mongoose.connect('mongodb://127.0.0.1/bounty_hunter');

app.set('view engine', 'ejs');
app.use(express.static('styles'));
app.use(express.static('assets'));
app.use(express.static('scripts'));
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/home', (req, res) => {
    res.render('home', { current });
})

app.get('/tasks', (req, res) => {
    res.render('tasks', { current })
})

app.get('/hunt', (req, res) => {
    res.render('hunt', { current })
})

// app.post('/tasks:id', (req, res) => {
//     id = req.params;
//     res.render('hunt', { id, current })
// })

app.post('/tasks/:id', (req, res) => {
    console.log(req.params)
    res.send(`this is the id`)
})

app.post('/hunt', (req, res) => {
    res.render('hunt')
})

// app.post('/hunt/:id', (req, res) => {
//     console.log(req.params)
//     id = req.params;
//     res.send(`your task id ${id}`)
// })

app.post('/tasks', (req, res, next) => {

    console.log(req.params);
    const newThreat = req.body;

    if (newThreat['threat_level'] === 'very-high') {
        newThreat['threat_level'] = 'Dragon';
    }
    else if (newThreat['threat_level'] === 'high') {
        newThreat['threat_level'] = 'Titan';
    }
    else if (newThreat['threat_level'] === 'medium') {
        newThreat['threat_level'] = 'Beast';
    }
    else if (newThreat['threat_level'] === 'low') {
        newThreat['threat_level'] = 'Grunt';
    }

    current.push(newThreat);
    console.log('heres the new threat', newThreat);
    try {
        res.render('tasks', { current });
    }
    catch (e) {
        console.log(e)
    }

})

app.listen(port, () => {
    console.log(`listening to port ${port}...`);
})


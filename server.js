const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('styles'));
app.use(express.static('assets'));
app.use(express.static('scripts'));
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))

const current = [
    {
        threat_level: 'Dragon',
        look: 'dragon-10.jpg',
        task: 'Adding tasks component to game.'
    },
    {
        threat_level: 'Dragon',
        look: 'dragon-10.jpg',
        task: 'hunter facing creature.'
    },
    {
        threat_level: 'Dragon',
        look: 'dragon-10.jpg',
        task: 'Setting up the database.'
    },
    {
        threat_level: 'Beast',
        look: 'dragon-10.jpg',
        task: 'Pay dads bills'
    },
]



app.get('/home', (req, res) => {
    res.render('home', { current });
})

app.get('/tasks', (req, res) => {
    res.render('tasks', { current })
})

app.get('/hunt', (req, res) => {
    res.render('hunt', { current });
})

app.post('/tasks', (req, res) => {
    console.log(req.body);
    const newThreat = req.body;

    if (newThreat['threat_level'] === 'very-high') {
        newThreat['threat_level'] = 'Dragon'
    }
    else if (newThreat['threat_level'] === 'high') {
        newThreat['threat_level'] = 'Titan'
    }
    else if (newThreat['threat_level'] === 'medium') {
        newThreat['threat_level'] = 'Beast'
    }
    else if (newThreat['threat_level'] === 'low') {
        newThreat['threat_level'] = 'Grunt'
    }

    current.push(newThreat);
    res.redirect('tasks', { current });
})

app.listen(port, () => {
    console.log(`listening to port ${port}...`);
})


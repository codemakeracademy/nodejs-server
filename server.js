// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });
//
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
import apiRouter from './api/router';
import mongoose from "mongoose";

const express = require('express')
const app = express()
const port = 3005


mongoose.connect('mongodb://localhost:27020/test_database').then((result) => {
    console.log(result);
}).catch(err => console.error(err));


const users = [
    {
        id: 1,
        name: 'Ivan',
        age: 34,
    }, {
        id: 2,
        name: 'Petr',
        age: 25
    }
]

app.use((req, res, next) => {
    const {forbidden} = req.query;
    if(forbidden) {
        return res.status(403).send('Forbidden');
    }
    req.allowed = true;
    next();
})

app.get('/', (req, res) => {
    res.send(`Hello World! ${req.allowed}`)
});

app.get('/users', (req, res) => {
    const {sort} = req.query;
    if(sort) {
        res.json(users.sort((a, b) => {
            if(a[sort] > b[sort]) return 1
            else if (a[sort] < b[sort]) return -1;
            else return 0
        }))
    }
    res.json(users);
})

app.get('/users/:userId', (req, res) => {
    if(req.params.userId) {
        const  user = users.find(user => {
            return user.id == req.params.userId;
        })
        if(user) {
            return res.json(user);
        }
        return res.status('404').send('Not Found');
    }
    return res.status('404').send('Not Found');
});

app.set('view engine', 'pug');

app.get('/pug', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

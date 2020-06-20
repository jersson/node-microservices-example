'use strict'
const port = 8080;
const express = require('express');
const server = express();

exports.start = (port) => {
    server.get('/books', (req, res) => {
        console.log(`the request is from ${req.url}`);
        const books = [
            { id: 1, name: 'Code Complete' },
            { id: 2, name: 'Clean Code' }
        ];

        res.send(books);
    });

    server.listen(port, () => {
        console.log(`server at port ${port} is running...`);
    });
};

this.start(port);
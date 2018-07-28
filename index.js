const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname,'/Frontend/portfolio/dist/portfolio')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/Frontend/portfolio/dist/portfolio/index.html'));
    console.log("New Connection:",req.connection.remoteAddress);
});

app.listen(port);
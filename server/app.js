const express = require('express');

const model = require('./models/model.js');

const app = express();

app.get('/entries', (req, res) => {
    res.writeHead(200, 'OK', {"content-type":"text/json"})
    res.write(model.entries);    //res.writeHead(200, 'OK');
    res.end();

});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
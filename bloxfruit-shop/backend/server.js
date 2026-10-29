const express = require('express');
const app = express();
port = 4002;

let data = ['dabi'];
let tesdata = ['dumdotnigga'];
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to BloxFruits shop</h1>`);
});

app.get('/fruitslist', (req, res) => {
    res.send(`chop fruit, flame fruit, srping fruit, light fruit`);
});

app.get('/data', (req, res) => {
    res.send(data);
});

app.get('/api/healthcheck', (req, res) => {
    res.json({status: 'ok', message: 'it ok rn', data});
});

app.post('/api/testdata', (req, res) => {
    const testdata = req.body; 
    res.sendStatus(200);
    data.push(testdata.data);
});

app.listen(port, () => {
    console.log(`server running at port : ${port}`);
});
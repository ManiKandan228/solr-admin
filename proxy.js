const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const port = 3000; // Change this port if needed

app.use(cors());

app.get('/solr/:collection/select', (req, res) => {
    const solrUrl = `http://localhost:8984/solr/${req.params.collection}/select?${req.url.split('?')[1]}`;
    request(solrUrl).pipe(res);
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});

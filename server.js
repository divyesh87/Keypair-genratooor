const express = require('express');
const Buffer = require("Buffer")
const cors = require("cors")
const app = express();

app.use(cors({}))

app.get('/buffer', (req, res) => {
    const buf = JSON.stringify(Buffer)
    res.send(buf)
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

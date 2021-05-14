var path = require('path')
const mockAPIResponse = require('./mockAPI.js')

const express = require('express')
const app = express()
app.use(express.static('dist'))
app.use(express.json())

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const cors = require("cors")
app.use(cors())

const fetch = require("node-fetch");

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



// API_KEY call
const dotenv = require('dotenv');
dotenv.config();

// fetch api - Receive data from the client
//link_test => https://monkeypen.com/pages/free-stories-for-kids
app.post('/test', async (req, res) => {
    (async function getApi() {

        const KEY = process.env.API_KEY;
        const check_url = await req.body.ul;
        if (check_url) {
            const url_api = `https://api.meaningcloud.com/sentiment-2.1?key=${KEY}&url=${check_url}&lang=en`;
            const ress = await fetch(url_api)
            const api_data = await ress.json();
            res.json(api_data);
        }
    })();
})
// =========




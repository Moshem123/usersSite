const express = require('express');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');
const logger = require('morgan');
const jenkinsapi = require('jenkins-api');
const app = express();
const port = 3000;


// Log the requests
app.use(logger('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function userAPI(url, postData, res) {
    let clientServerOptions = {
        uri: url,
        body: JSON.stringify(postData),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    request(clientServerOptions, function (error, response) {
        if (error) throw error;
        console.log('aserver response from request', response.body);
        res.send(response.body.replace(/^"|"$/g, ''));
    });
}

app.post('/proxy', function (req, res) {
    let input = req.body;
    let path = input.payload.path;
    let url = input.payload.url;
    let orgname = input.header.ownerName;


    let newUrl = 'http://' + url + ':7554/' + path;
    console.log("path of request " + newUrl + " to org " + orgname);
    userAPI(newUrl, input, res);
});


app.listen(port, function () {
    console.log('app listening on port ' + port);
});
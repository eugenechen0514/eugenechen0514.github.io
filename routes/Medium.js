const express = require('express');
const router = express.Router();

const request = require('request'); // Include the request lib - run npm install request

async function getPosts({username}) {
    const url = 'https://medium.com/@' + username + '/latest?format=json';
    return new Promise((resolve, reject) => {
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                // We need to pull out the text that comes thru from Medium for JSON hacking
                const jsonBody = JSON.parse(body.replace('])}while(1);</x>', ''));
                resolve(jsonBody);
            } else {
                reject(new Error('Fail'));
            }
        });
    });
}

router.get('/latest', function(req, res, next) {
    // Sets the username - replace username with your Medium Username
    const username = 'yujiechen0514';
    getPosts({username})
        .then(data => {
            res.json(data);
        })
        .catch(next);
});

module.exports = router;

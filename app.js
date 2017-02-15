var express = require('express');


var app = express();

var port = process.env.PORT || 3000;

var submissionRouter = express.Router();

submissionRouter.route('/Submissions')
    .get(function (req, res) {
        var responseJson = {hello: "This is my api"};
        res.json(responseJson);
    });

app.use('/API', submissionRouter);

app.get('/', function (req, res) {
    res.send('welcome to my API');
});

app.listen(port, function () {
    console.log('running on PORT: ' + port);
});
var express = require("express");
var app = express();

app.post('/post', function (req, res) {
    res.send('Got a POST request');
  });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
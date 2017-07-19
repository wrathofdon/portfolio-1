'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/JSON'), function (req, res){
  res.sendFile('projects.JSON', {root: './models'})
}

app.listen(PORT, function() {
  console.log(`Ready to serve on port: ${PORT}`)
})

const express = require('express');
const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views',  path.resolve(__dirname, 'views'));

app.use(express.static('public'));

// databestand
const mijnart = require('./data/art.json');

// home
app.get('/', function(req,res){
  res.render('home', {
    post: mijnart.art[req.params.postid],
    posts: mijnart.art
  });
});

// overzicht kunstwerken
app.get('/art', function(req,res){
  res.render('kunstwerken', {
    posts: mijnart.art
  });
});

// detailpagina van een kunstwerk
app.get('/art/:postid', function(req,res){
  res.render('detail', {
    post: mijnart.art[req.params.postid]
  });
});

app.get('/contact', function(req,res){
  res.render('contact');
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
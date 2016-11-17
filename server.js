var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleonre={
    title:'Article-one!Alok Mishra',
    heading:'Article-one',
    date:'Sep 15 2016',
    content:`/<p>
            This is the content for my first Article.This is the content for my first Article.
            This is the content for my first Article.
            This is the content for my first Article.
            This is the content for my first Article.
            This is the content for my first Article.
        </p>
        <p>
            This is the content for my first Article.
            This is the content for my first Article.
            This is the content for my first Article.
            This is the content for my first Article.
            
    </p>`
};
Function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmltemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <style>
           <link href="/ui/style.css" rel="stylesheet" />
        </style>
    </head>
    <body>
        <div class ="container">
            
        <div>
        <a href="/">Home</a>
        </div>
        <hr>
        <h1>${heading}</h1>
        <div>
            Nov, 17 2016
        </div>
        <div>
        ${date}
        ${content}
        </div>
    </body>
    

</html
`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res){
    res.sendFile(createTemplate(articleOne));
});
app.get('/article-two', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

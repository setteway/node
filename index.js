var express = require('express');
var fs = require('fs');

var app = express();

var books = fs.readFileSync("books.json", "utf8");

books = JSON.parse(books);

app.get('/', function(req, res) {
	res.send("Используйте запросы: /api/books - получение всего массива книг /api/book/:id - получение определённой книги из массива ");

});

app.get('/api/books', function(req, res) {
	res.json(books);
});

app.get('/api/book/:id', function(req, res) {
	res.json(books[req.params.id]);
});

app.listen(3000);

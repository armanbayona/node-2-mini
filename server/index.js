const express = require('express');

const bc = require('./controllers/booksController.js');

const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

//ROUTES
app.get('api/books', bc.read);
app.post('api/books', bc.create);
app.put('api/books/:booksId', bc.update);
app.delete('api/books/:booksId', bc.delete);


const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
});
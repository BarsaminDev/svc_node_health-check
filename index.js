require('dotenv').config();

/**
 * 
 */
const express = require('express');

/**
 * 
 */
const bodyParser = require('body-parser');

/**
 * 
 */
const PORT = process.env.PORT || 5000;

/**
 * 
 */
const app = express();

/**
 * middle wares
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(individualLocationWindowValidation);
app.use(rateLimit);

function rateLimit(req, res, next) {
	console.log('rate limit');
	next();
}

function individualLocationWindowValidation(req, res, next) {
	console.log('individual location window validation');
	next();
}

/**
 * 
 */
let cache = {};

/**
 * posts
 */
app.post('/health', (req, res) => {
	console.log(req.body);
	
	res.send({
		ok: true,
		data: Math.random().toString(32)
	});
});



/**
 * gets
 */
app.get('/health', (req, res) => {
	console.log('asdfasdfas');
	res.send({
		ok: true
	});
});

/**
 * gets
 */
app.get('', (req, res) => {
	console.log('asdfasdfas');
	res.send({
		ok: true,
		data: 'get working'
	});
});

/**
 * 
 */
app.get('/user', (req, res) => {
	console.log('user');
	res.send({
		ok: true,
		user: [222]
	});
});

/**
 * 
 */
app.listen(PORT, () => console.log(`HS is listening on port ${PORT}`))

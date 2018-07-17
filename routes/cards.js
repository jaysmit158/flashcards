const express = require('express');
const router = express.Router();
const data = require('../data/flashcardData.json').data;
const cards = data.cards;

router.get('/', (req, res) => {
	res.render('card', 
		{
		prompt: "Who is buried in Grant's tomb?",
		 hint: "Think about whose tomb it is."
		}
	);

});

module.exports = router;
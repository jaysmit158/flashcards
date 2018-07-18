const express = require('express');
const router = express.Router();
const data = require('../data/flashcardData.json').data;
const cards = data.cards;

// const { data } = require('../data/flashcardData.json');
// const { cards } = data;

router.get('/:id', (req, res) => {
	const side = req.query.side;
	const id = req.params.id;
	const text = cards[id][side];
	const hint = cards[id].hint;
	const templateData = { text, hint };
	res.render('card', templateData);

});



module.exports = router;
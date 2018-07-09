router.get('/cards', (req, res) => {
	res.render('card', 
		{
		prompt: "Who is buried in Grant's tomb?",
		 hint: "Think about whose tomb it is."
		}
	);

});
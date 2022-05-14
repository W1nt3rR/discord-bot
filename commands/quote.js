const fetch = require("node-fetch");

module.exports = {
	name: 'quote',
	aliases: ['q'],
	description: 'Random Quote!',
	cooldown: 3,
	guildOnly: true,
	args:false,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	async execute(msg, args) {
		const author = args.join(" ");
		
		const response = await fetch(`https://api.quotable.io/random${author ? `?author=${author}` : ""}`); //get metoda default

		const result = await response.json();
		msg.reply(result.content + ' author: ' + result.author);



		/*
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((result) => {
				// console.log(result);
				msg.reply(result.content + ' author: ' + result.author);
			});
			*/
	},
};
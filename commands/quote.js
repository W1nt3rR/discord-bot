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
	execute(msg, args) {
		// const now = Date.now();
		// const duration = (now - msg.createdTimestamp) / 1000;
		// msg.reply(`Pong! Time needed: ${duration.toFixed(3)}s`);

		fetch("https://api.quotable.io/random")
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				msg.reply(result.content + ' author: ' + result.author);
			});
	},
};
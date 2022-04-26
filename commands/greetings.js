const { Channel } = require("discord.js");

module.exports = {
	name: 'greetings',
	aliases: ['greet'],
	description: 'Greets people!',
	cooldown: 5,
	guildOnly: true,
	args: false,
	usage: false,
	// eslint-disable-next-line no-unused-vars
	execute(msg) {
		// const now = Date.now();
		// const duration = (now - msg.createdTimestamp) / 1000;
		// msg.reply(`Pong! Time needed: ${duration.toFixed(3)}s`);

        //msg.reply(`Greetings ${msg.author}`);
		var random = Math.floor(Math.random() * 4) + 1;
		switch(random)
		{
			case(1):
				msg.channel.send(`Greetings ${msg.author.username}, not nice to meet you`);
				break;
			case(2):
				msg.channel.send(`Hello ${msg.author.username}`);
				break;
			case(3):
				msg.channel.send(`Aloha ${msg.author.username}, how are you?`);
				break;
			case(4):
				msg.channel.send(`Zdravo ${msg.author.username}`);
				break;
		}
		
		//msg.channel.send(`Greetings ${msg.author.username}, not nice to meet you`);
	},
};
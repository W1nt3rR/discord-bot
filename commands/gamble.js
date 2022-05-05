const { Channel } = require("discord.js");
var randomNumber;
module.exports = {
	name: 'guess',
	aliases: ['gamble'],
	description: 'Guessing game',
	cooldown: 3,
	guildOnly: true,
	args: true,
	usage: false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
		// const now = Date.now();
		// const duration = (now - msg.createdTimestamp) / 1000;
		// msg.reply(`Pong! Time needed: ${duration.toFixed(3)}s`);

        //msg.reply(`Greetings ${msg.author}`);
		// var random = Math.floor(Math.random() * 10) + 1;

        const argument = args[0];

        if(argument === "start") {
            randomNumber = Math.floor(Math.random() * 10) + 1;
            return msg.reply("The games have begun.")
        }

        if(randomNumber == undefined) {
            return msg.reply("Please start the game!");
        }

        if (argument == randomNumber) {
            randomNumber = undefined;
            return msg.reply("Congratulations.");
        }
        
        return msg.reply("You know nothing.");

		//msg.channel.send(`Greetings ${msg.author.username}, not nice to meet you`);
	},
};
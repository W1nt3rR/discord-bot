const { Channel } = require("discord.js");
var randomNumber;
let numbers = {};
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
		const number = numbers[msg.author.id];

        if(argument === "start") {
            numbers[msg.author.id] = Math.floor(Math.random() * 10) + 1;
            return msg.reply("The games have begun.")
        }

        if(numbers[msg.author.id] == undefined) {
            return msg.reply("Please start the game!");
        }

        if (argument == numbers[msg.author.id]) {
            numbers[msg.author.id] = undefined;
            return msg.reply("Congratulations.");
        }
        
        return msg.reply("You know nothing.");

		//msg.channel.send(`Greetings ${msg.author.username}, not nice to meet you`);
	},
};
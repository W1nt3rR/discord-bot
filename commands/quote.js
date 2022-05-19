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
		// const author = args.join(" ");
		
		// const response = await fetch(`https://api.quotable.io/random${author ? `?author=${author}` : ""}`); //get metoda default

		// const result = await response.json();
		// msg.reply(result.content + ' author: ' + result.author);

		let name = args[0];
		const randomQuoteFromAuthor = async (name) => {
			try {
				const author = await authorCheck(name);
				// console.log(author);
				if(!author) {
					console.log("Author doesn't exist");
					return;
				}
			
				const response = await fetch(`https://api.quotable.io/random${author ? `?author=${author}` : ""}`);
				const result = await response.json();
			
				// console.log(result);
				console.log(result.content + " Author: " + result.author);
				return result.content + " Author: " + result.author;
			} catch (error) {
				console.log(error);
			}
		};

		const authorCheck = async (author) => {
			try {
				const response = await fetch(`https://api.quotable.io/search/authors?query=${author}`);
				const result = await response.json();
		
				if(!result.count) {
					return false;
				}
				
				// console.log(result);
				// if(result.count === 1){
					return result.results[0].name;
				// }
		
				// return result.author;
			} catch (error) {
				console.log(error);
			}
		}

		randomQuoteFromAuthor(name).then(value => msg.reply(value));

		// console.log(result.content + " Author: " + result.author);
		/*
			const returnQuotes = async (page, sortBy, order) => {
				try {
					const paramsExist = page || sortBy || order;
					const moreThan2 = page && sortBy;
					const response = await fetch(`https://api.quotable.io/quotes
						${paramsExist ? "?" : ""}
						${page ? `page=${page}` : ""}
						${page || sortBy ? "&" : ""}
						${sortBy ? `sortBy=${sortBy}` : ""}
						${order ? `order=${order}` : ""}`);
					const result = await response.json();
			
					// console.log(result.results[0].content);
			
					// result.results.forEach(element => {
					//     console.log(element.content + " by: " + element.author + "\n");
					// });
			
					return result.results;
				} catch (error) {
					console.log(error);
				}
			};
			*/
			
			// randomQuoteFromAuthor("Nikola Teslas");
			// authorCheck("Adam").then((value) => console.log(value));
			// randomQuoteFromAuthor("richard");
			
			// returnQuotes();
			
			/*
			returnQuotes(5, "content", "desc").then(value => value.forEach(element => { 
				console.log(element.content + " by: " + element.author + "\n"); 
			}));
			*/
	},
};
const Discord = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
	name: 'eval',
	async execute(msg, args) {
		try {
			const response = String(eval(args.join(' ')))
			msg.channel.send(`\`\`\`js\n${response.replace(msg.client.token, `Don't leak your own token, idiot`).replace(/\s+/g, ' ').split('\\').join('\\\\').split('`').join('\`')}\n\`\`\``)
			.catch(async (e) =>  {
				msg.channel.send(String(e))
			})
		} catch (ex) {
			msg.channel.send(`\`\`\`c\n${ex}\n\`\`\``)
		}
	}
}
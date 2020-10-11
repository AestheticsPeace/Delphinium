const Discord = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
	name: 'self-purge',
	async execute(msg, args) {

    let messagecount = parseInt(args[0]) || 1;

    msg.channel.fetchMessages({limit: Math.min(messagecount + 1, 100)}).then(messages => {
        messages.forEach(m => {
            if (m.author.id == msg.client.user.id) {
                m.delete().catch(console.error);
            }
        });
    })
	}
}
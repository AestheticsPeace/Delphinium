const Discord = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
	name: 'crashme',
	async execute(msg, args) {

        msg.channel.send('Terminating Discords/Delphiniums Process...')
        msg.client.destroy();

	}
}
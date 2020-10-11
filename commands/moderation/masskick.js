const Discord = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
	name: 'masskick',
	async execute(msg, args) {

		if(!msg.member.hasPermission('KICK_MEMBERS')) return send('You do not have the permission to run this')
        await msg.guild.members.map(async member => {
            await member.kick()
        })
        let embed = new Discord.RichEmbed()
        embed.setDescription(`**Started mass kicking**`)
        embed.setColor(settings.embedcolor)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
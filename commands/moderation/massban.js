const Discord = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
	name: 'massban',
	async execute(msg, args) {

		if(!msg.member.hasPermission('BAN_MEMBERS')) return send('You do not have the permission to run this')
        await msg.guild.members.map(async member => {
            await member.ban()
        })
        let embed = new Discord.RichEmbed()
        embed.setDescription(`**Started mass banning**`)
        embed.setColor(settings.embedcolor)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
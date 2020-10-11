const Discord = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
	name: 'massunban',
	async execute(msg, args) {

		if(!msg.member.hasPermission('BAN_MEMBERS')) return send('You do not have the permission to run this')
        let members = await msg.guild.fetchBans().keyArray()
        for(let i = 0; i < members.length; i++) {

        await msg.guild.unban(members[i])
    }
        let embed = new Discord.RichEmbed()
        embed.setDescription(`**Started mass unbanning**`)
        embed.setColor(settings.embedcolor)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
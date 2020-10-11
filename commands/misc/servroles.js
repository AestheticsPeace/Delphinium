const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'servroles',
	async execute(msg, args) {

        if(!msg.member.hasPermission('MANAGE_ROLES')) return send('You do not have the required permission to run this')
        if (msg.guild.roles.map(r => r.toString()).join("").length > 2000) return send('This server has too many roles to display (' + msg.guild.roles.size + ' roles)')
        let embed = new Discord.RichEmbed()
        embed.setColor(settings.embedcolor)
        embed.setTitle(`${msg.guild.name}'s Roles`)
        embed.setDescription(msg.guild.roles.map(r => r.toString()).join(""))
        msg.channel.send(embed).then(() => msg.delete())
	}
}
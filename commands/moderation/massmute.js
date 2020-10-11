const Discord = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
	name: 'massmute',
	async execute(msg, args) {

if(!msg.member.hasPermission('MANAGE_ROLES')) return send('You do not have the permission to run this')
        let MUTED = msg.guild.roles.find(r => r.name === 'Muted')
        if(!MUTED) return send('There is no muted role to use, the role name has to be "Muted"')
        await msg.guild.members.map(async member => {
            await member.addRole(MUTED)
        })
        let embed = new Discord.RichEmbed()
        embed.setDescription(`**Started mass muting**`)
        embed.setColor(settings.embedcolor)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
    }
}
const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'pp',
	async execute(msg, args) {
        
        if (msg.channel.type !== "dm") {
            let user = msg.mentions.users.first() || msg.guild.members.find(mem => mem.user.id === args[0]) || msg.guild.members.find(mem => mem.user.username === args[0]) || msg.guild.members.find(mem => mem.user.tag === args[0]) || msg.guild.members.get(args[0]) || msg.author

            let s = "=".repeat(Math.floor(Math.random() * 14))
            let embed = new Discord.RichEmbed()
            embed.setTitle(`PP Machine`)
            embed.setColor(settings.embedcolor)
            embed.setDescription(`**${user}'s PP:
        8${s}D**`)
            msg.channel.send(embed).then(() => {
                msg.delete()
            })
        } else if (msg.channel.type == "dm") {
            let user = msg.author
            let s = "=".repeat(Math.floor(Math.random() * 14))
            let embed = new Discord.RichEmbed()
            embed.setTitle(`PP Machine`)
            embed.setColor(settings.embedcolor)
            embed.setDescription(`**${user}'s PP:
        8${s}D**`)
           msg.channel.send(embed).then(() => {
                msg.delete()
            })
        }
	}
}
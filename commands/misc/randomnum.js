const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'randomnum',
	async execute(msg, args) {
        
        let r = Math.floor(Math.random(args[0]) * args[1])
        let embed = new Discord.RichEmbed()
        embed.setTitle(`Random Number Gen`)
        embed.setColor(settings.embedcolor)
        embed.setDescription(`**${r}**`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
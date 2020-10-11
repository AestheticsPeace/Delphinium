const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'embed',
	async execute(msg, args) {
        
        let embed = new Discord.RichEmbed()
        embed.setColor(settings.embedcolor)
        embed.setDescription(`**${args.join(" ")}**`)
        msg.channel.send(embed).then(() => {msg.delete()})
	}
}
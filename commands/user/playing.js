const Discord = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
	name: 'playing',
	async execute(msg, args) {

        msg.client.user.setActivity(args.join(" "), {
            type: "PLAYING"
        })
        let embed = new Discord.RichEmbed()
        embed.setColor(settings.embedcolor)
        embed.setTitle(`Status: Playing`)
        embed.setDescription(`**Activity: ${args.join(" ")}**`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
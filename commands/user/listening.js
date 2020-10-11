const Discord = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
	name: 'listening',
	async execute(msg, args) {

        msg.client.user.setActivity(args.join(" "), {
            type: "LISTENING"
        })
        let embed = new Discord.RichEmbed()
        embed.setColor(settings.embedcolor)
        embed.setTitle(`Status: Listening`)
        embed.setDescription(`**Activity: ${args.join(" ")}**`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
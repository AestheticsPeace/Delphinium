const Discord = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
	name: 'streaming',
	async execute(msg, args) {

        msg.client.user.setActivity(args.join(" "), {
            type: "STREAMING"
        })
        let embed = new Discord.RichEmbed()
        embed.setColor(settings.embedcolor)
        embed.setTitle(`Status: Streaming`)
        embed.setDescription(`**Activity: ${args.join(" ")}**`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
const Discord = require("discord.js");
const { writeFileSync } = require("fs");
const settings = require("./../../settings.json");

module.exports = {
	name: 'embedcolor',
	async execute(msg, args) {

		if(settings.embedcolor == undefined ? [] : settings.embedcolor)
        if (settings.embedcolor == undefined) {
            settings.embedcolor = "BLUE"
        }

        let input = args.join(" ") || "PURPLE"

        settings.embedcolor = input
        writeFileSync("settings.json", JSON.stringify(settings))

        let embed = new Discord.RichEmbed()
        embed.setColor(settings.embedcolor)
        embed.setDescription(`**Changed embed colour to: ${input}**`)

        msg.channel.send(embed).then(() => {msg.delete()})
	}
}
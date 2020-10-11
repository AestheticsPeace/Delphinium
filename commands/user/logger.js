const Discord = require("discord.js");
const { writeFileSync } = require("fs");
const settings = require("./../../settings.json");

module.exports = {
	name: 'logger',
	async execute(msg, args) {

		if (settings.private == undefined) {
            settings.private = false
        }
        if (args[0]) {
            var setting;
            if (args[0].toUpperCase() == "ON") {
                setting = true
            } else if (args[0].toUpperCase() == "OFF") {
                setting = false
            }
            if (setting == undefined) {
                let embed = new Discord.RichEmbed()
                    embed.setColor(settings.embedcolor)
                    embed.setTitle('MessageLogger')
                    embed.setDescription("Usage: " + prefix + "logger [ON/OFF]")
                
                msg.channel.send(embed)
                msg.delete()
                return
            }
            settings.logger = setting
        } else {
            settings.logger = !settings.logger
        }
        writeFileSync("settings.json", JSON.stringify(settings))
        let embed = new Discord.RichEmbed()
                    embed.setColor(((settings.logger == true) && 0x6cc24a) || 0xff0000)
                    embed.setTitle('MessageLogger')
                    embed.setDescription(((settings.logger == true) && "Enabled Messagelogger") || "Disabled Messagelogger")

        msg.channel.send(embed)
        msg.delete()
	}
}
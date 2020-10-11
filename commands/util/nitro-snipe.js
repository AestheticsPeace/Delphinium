const Discord = require("discord.js");
const settings = require("./../../settings.json");
const { writeFileSync } = require("fs");

module.exports = {
    name: 'nitro-snipe',
    async execute(msg, args) {
       
        if (settings.nitro == undefined) {
            settings.nitro = false
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
        embed.setTitle('Nitro Sniper')
        embed.setDescription("Usage: " + prefix + "nitro-snipe [ON/OFF]")
                
                msg.channel.send(embed)
                msg.delete()
                return
            }
            settings.nitro = setting
        } else {
            settings.nitro = !settings.nitro
        }
        writeFileSync("settings.json", JSON.stringify(settings))
        let embed = new Discord.RichEmbed()
        embed.setColor(((settings.nitro == true) && 0x6cc24a) || 0xff0000)
        embed.setTitle('Nitro Sniper')
        embed.setDescription(((settings.nitro == true) && "Enabled Nitro Sniper") || "Disabled Nitro Sniper")

        msg.channel.send(embed)
        msg.delete()
    }
}
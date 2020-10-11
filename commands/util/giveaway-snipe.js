const Discord = require("discord.js");
const settings = require("./../../settings.json");
const { writeFileSync } = require("fs");

module.exports = {
    name: 'giveaway-snipe',
    async execute(msg, args) {
       
        if (settings.giveaway == undefined) {
            settings.giveaway = false
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
            embed.setTitle('Giveaway Sniper')
            embed.setDescription("Usage: " + prefix + "giveaway-snipe [ON/OFF]")
    
                msg.channel.send(embed)
                msg.delete()
                return;
            }
            settings.giveaway = setting
        } else {
            settings.giveaway = !settings.giveaway
        }
        writeFileSync("settings.json", JSON.stringify(settings))
        let embed = new Discord.RichEmbed()
        embed.setColor(((settings.giveaway == true) && 0x6cc24a) || 0xff0000)
        embed.setTitle('Giveaway Sniper')
        embed.setDescription(((settings.giveaway == true) && "Enabled Giveaway Sniper") || "Disabled Giveaway Sniper")

        msg.channel.send(embed)
        msg.delete()
    }
}
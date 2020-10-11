const Discord = require("discord.js");
const settings = require("./../../settings.json")
const { writeFileSync } = require("fs");

module.exports = {
	name: 'slotbot-snipe',
	async execute(msg, args) {

if(settings.slotbot == undefined ? [] : settings.slotbot)
        if (settings.slotbot == undefined) {
            settings.slotbot = false
        }

        if(!args[0]) {
            msg.channel.send('Incorrect Usage, use `%slotbot-snipe <on/off>`')
        }

        if(args[0]) {
        if(args[0].toUpperCase() == 'OFF') {
            settings.slotbot = false
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setTitle('Slot Bot Snipe')
            embed.setDescription(`**Slotbot Snipe: Disabled**`)
            
            msg.channel.send(embed).then(() => {msg.delete()})
        }
        
        if(args[0].toUpperCase() == 'ON') {
            settings.slotbot = true
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setTitle('Slot Bot Snipe')
            embed.setDescription(`**Slotbot Snipe: Enabled**`)
            
            msg.channel.send(embed).then(() => {msg.delete()})
        }

        writeFileSync("settings.json", JSON.stringify(settings))
    }
    }
}
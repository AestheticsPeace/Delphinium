const Discord = require("discord.js");
const settings = require("./../../settings.json")
const { writeFileSync } = require("fs");

module.exports = {
	name: 'trickcord-snipe',
	async execute(msg, args) {

if(settings.halloween == undefined ? [] : settings.halloween)
        if (settings.halloween == undefined) {
            settings.halloween = false
        }

        if(!args[0]) {
            msg.channel.send('Incorrect Usage, use `%trickcord-snipe <on/off>`')
        }

        if(args[0]) {
        if(args[0].toUpperCase() == 'OFF') {
            settings.halloween = false
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setTitle('Trick Cord Snipe')
            embed.setDescription(`**Trickcord Snipe: Disabled**`)
            
            msg.channel.send(embed).then(() => {msg.delete()})
        }
        
        if(args[0].toUpperCase() == 'ON') {
            settings.halloween = true
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setTitle('Tick Cord Snipe')
            embed.setDescription(`**Trickcord Snipe: Enabled**`)
            
            msg.channel.send(embed).then(() => {msg.delete()})
        }

        writeFileSync("settings.json", JSON.stringify(settings))
    }
    }
}
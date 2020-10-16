const Discord = require("discord.js");
const settings = require("./../../settings.json")
const { writeFileSync } = require("fs");

module.exports = {
	name: 'anigame-snipe',
	async execute(msg, args) {

if(settings.anigame == undefined ? [] : settings.anigame)
        if (settings.anigame == undefined) {
            settings.anigame = false
        }

        if(!args[0]) {
            msg.channel.send('Incorrect Usage, use `%anigame-snipe <on/off>`')
        }

        if(args[0]) {
        if(args[0].toUpperCase() == 'OFF') {
            settings.anigame = false
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setTitle('Anigame Snipe')
            embed.setDescription(`**Anigame Snipe: Disabled**`)
            
            msg.channel.send(embed).then(() => {msg.delete()})
        }
        
        if(args[0].toUpperCase() == 'ON') {
            settings.anigame = true
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setTitle('Anigame Snipe')
            embed.setDescription(`**Anigame Snipe: Enabled**`)
            
            msg.channel.send(embed).then(() => {msg.delete()})
        }

        writeFileSync("settings.json", JSON.stringify(settings))
    }
    }
}
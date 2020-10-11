const Discord = require("discord.js");
const { writeFileSync } = require("fs");
const settings = require("./../../settings.json")

module.exports = {
	name: 'autofarm-tacoshack',
	async execute(msg, args) {

        if(settings.tacoshack == undefined ? [] : settings.tacoshack)
        if (settings.tacoshack == undefined) {
            settings.tacoshack = false
        }

        if(!args[0]) {
            msg.channel.send('Incorrect Usage, use `%autofarm-tacoshack <on/off>`')
        }

        if(args[0].toUpperCase() == 'OFF') {
            settings.tacoshack = false
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setTitle('TacoShack Farm')
            embed.setDescription(`**TacoShack Farm: Disabled**`)
            
            msg.channel.send(embed).then(() => {msg.delete()})
        }
        
        if(args[0].toUpperCase() == 'ON') {
            settings.tacoshack = true
            writeFileSync("settings.json", JSON.stringify(settings))
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setTitle('TacoShack Farm')
            embed.setDescription(`**TacoShack Farm: Enabled**`)
            
            msg.channel.send(embed).then(() => {msg.delete()})
        }
        writeFileSync("settings.json", JSON.stringify(settings))

        if(settings.tacoshack == true) {

            setInterval(function() {
               msg.channel.send('!work')
            }, 600100)

            setInterval(function() {
                msg.channel.send('!tips')
            }, 300100)

            setInterval(function() {
                msg.channel.send('!clean')
            }, 86400100)
        } else {
            return;
        }
        
	}
}
const Discord = require("discord.js");
const settings = require("./../../settings.json");
const wd = require("word-definition");

module.exports = {
	name: 'define',
	async execute(msg, args) {
        
        try {
            let input = args.join(" ") || 'Discord'
    
            wd.getDef(input, "en", null, function(definition) {
                let embed = new Discord.RichEmbed()
                embed.setTitle('Definition Found')
                embed.setColor(settings.embedcolor)
                embed.setThumbnail(`https://www.clipartmax.com/png/small/481-4813924_suage-wiktionary-dictionary-logo.png`)
                embed.setDescription(`**Definition For: ${input}**`)
                embed.addField('Word Category', definition.category || "No Result Found")
                embed.addField('Definition', definition.definition || "No Result Found")
    
                msg.channel.send(embed).then(() => {msg.delete()})
            });
        } catch(error) {
        let embed = new Discord.RichEmbed()
            embed.setTitle('Definition Error')
            embed.setColor(settings.embedcolor)
            embed.setDescription(`**Error while searching, try again**`)
    
            msg.channel.send(embed).then(() => {msg.delete()})
        }
	}
}
const Discord = require("discord.js");
const settings = require("./../../settings.json");
const urban = require("relevant-urban");

module.exports = {
	name: 'urban',
	async execute(msg, args) {
        
        try {
            const search = await urban(args.join(" ")) || 'No Result'
            let embed = new Discord.RichEmbed()
    
            embed.setTitle('Urban Dictionary Result')
            embed.setThumbnail(`https://whohaha.com/app/uploads/2017/08/Urban-Dictionary-logo-300x141.png`)
            embed.setColor(settings.embedcolor)
            embed.setDescription(`**Searched For: ${search.word}**`)
            embed.addField('Example', search.example)
            embed.addField('Definition', search.definition)
            embed.setFooter(`Content Sourced From Urban Dictionary`)
    
            msg.channel.send(embed).then(() => {msg.delete()})
            } catch(error) {
            let embed = new Discord.RichEmbed()
    
            embed.setTitle('Urban Dictionary Result')
            embed.setColor(settings.embedcolor)
            embed.setDescription(`**Error while searching**`)
            msg.channel.send(embed).then(() => {msg.delete()})
            }
	}
}
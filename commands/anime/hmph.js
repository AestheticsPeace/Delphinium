const Discord = require("discord.js");const settings = require("./../../settings.json");

module.exports = {
	name: 'hmph',
	async execute(msg, args) {
        
        let embed = new Discord.RichEmbed()
        embed.setTitle(`Whatever I didn't care anyway.. >;c`)
        embed.setColor(settings.embedcolor)
        embed.setImage(`https://media1.tenor.com/images/b7e132fd3f4e110ea54ef8aa8f4eebbe/tenor.gif`)
        embed.setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
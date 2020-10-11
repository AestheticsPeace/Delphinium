const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'pout',
	async execute(msg, args) {
        
        let embed = new Discord.RichEmbed()
        embed.setTitle(`But I WANT IT >;C`)
        embed.setColor(settings.embedcolor)
        embed.setImage(`https://cutewallpaper.org/21/anime-pout-face/Imgur-The-magic-of-the-Internet.gif`)
        embed.setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
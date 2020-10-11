const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'suicide',
	async execute(msg, args) {
        
        let embed = new Discord.RichEmbed()
        embed.setTitle(`I'm ending it all today...`)
        embed.setColor(settings.embedcolor)
        embed.setImage(`https://static.zerochan.net/Suicide.full.1111437.jpg`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
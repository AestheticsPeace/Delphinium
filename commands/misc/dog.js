const Discord = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
	name: 'dog',
	async execute(msg, args) {
        
        var {
            body
        } = await superagent
        .get(`https://nekos.life/api/v2/img/woof`);

        let embed = new Discord.RichEmbed()
        embed.setColor(settings.embedcolor)
        embed.setDescription(`**A woofer has appeared**`)
        embed.setImage(body.url)
        embed.setFooter(`🐾`)

        msg.channel.send(embed).then(() => {msg.delete()})
	}
}
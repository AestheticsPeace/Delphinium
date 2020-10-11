const Discord = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
	name: 'hug',
	async execute(msg, args) {
        
        let user = msg.mentions.users.first()
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/hug`);
        let embed = new Discord.RichEmbed()
        embed.setDescription(`**${msg.author} Hugs ${user}**`)
        embed.setColor(settings.embedcolor)
        embed.setImage(body.url)
        embed.setFooter(`'ฅ(≈>ܫ<≈)♥`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
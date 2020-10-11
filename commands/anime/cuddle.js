const Discord = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
	name: 'cuddle',
	async execute(msg, args) {
        
        let user = msg.mentions.users.first() || msg.author
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/cuddle`);
        let embed = new Discord.RichEmbed()
        embed.setDescription(`**I think ${user} deserves a big cuddle :3**`)
        embed.setColor(settings.embedcolor)
        embed.setImage(body.url)
        embed.setFooter(`'ฅ(≈>ܫ<≈)♥`)
        embed.setTimestamp()
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
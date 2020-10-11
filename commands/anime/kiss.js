const Discord = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
	name: 'kiss',
	async execute(msg, args) {
        
        let user = msg.mentions.users.first()
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/kiss`);
        let embed = new Discord.RichEmbed()
        embed.setDescription(`**${msg.author} Kisses ${user}**`)
        embed.setColor(settings.embedcolor)
        embed.setImage(body.url)
        embed.setFooter(`'ฅ(≈>ܫ<≈)♥`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
const Discord = require("discord.js");
const settings = require("./../../settings.json");
const superagent = require("superagent");

module.exports = {
    name: 'rfuck',
    async execute(msg, args) {

        let user = msg.mentions.users.first() || msg.author
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/bj`);
        let embed = new Discord.RichEmbed()
        embed.setDescription(`**${user} Sucks off ${msg.author}**`)
        embed.setColor(settings.embedcolor)
        embed.setImage(body.url)
        embed.setFooter(`'ฅ(≈>ܫ<≈)♥`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
    }
}
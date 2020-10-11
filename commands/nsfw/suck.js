const Discord = require("discord.js");
const settings = require("./../../settings.json");
const superagent = require("superagent");

module.exports = {
    name: 'suck',
    async execute(msg, args) {

        let user = msg.mentions.users.first() || msg.author
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/bj`);
        let embed = new Discord.RichEmbed()
        embed.setDescription(`**${msg.author} Sucks off ${user}**`)
        embed.setColor(settings.embedcolor)
        embed.setImage(body.url)
        embed.setFooter(`'ฅ(≈>ܫ<≈)♥`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
    }
}
const Discord = require("discord.js");
const settings = require("./../../settings.json");
const superagent = require("superagent");

module.exports = {
    name: 'fuck',
    async execute(msg, args) {

        let user = msg.mentions.users.first() || msg.author
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/classic`);
        let embed = new Discord.RichEmbed()
        embed.setDescription(`**${msg.author} Fucks ${user}**`)
        embed.setColor(settings.embedcolor)
        embed.setImage(body.url)
        embed.setFooter(`'ฅ(≈>ܫ<≈)♥`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
    }
}
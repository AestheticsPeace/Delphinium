const Discord = require("discord.js");
const settings = require("./../../settings.json");
const superagent = require("superagent");

module.exports = {
    name: 'solo',
    async execute(msg, args) {

        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/solo`);
        let embed = new Discord.RichEmbed()
        embed.setTitle(`Here's some nice Hentai!`)
        embed.setColor(settings.embedcolor)
        embed.setImage(body.url)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
    }
}
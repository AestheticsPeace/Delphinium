const Discord = require("discord.js");
const settings = require("./../../settings.json");
const superagent = require("superagent");

module.exports = {
    name: 'hentai',
    async execute(msg, args) {

        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/classic`);
        let embed = new Discord.RichEmbed()
        embed.setTitle(`Here's some nice hentai!`)
        embed.setColor(settings.embedcolor)
        embed.setImage(body.url)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
    }
}
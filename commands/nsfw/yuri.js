const Discord = require("discord.js");
const settings = require("./../../settings.json");
const superagent = require("superagent");

module.exports = {
    name: 'porn',
    async execute(msg, args) {

        let user = msg.mentions.users.first() || msg.author
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/yuri`);
        let embed = new Discord.RichEmbed()
        embed.setTitle(`Looks like we have some nice yuri here`)
        embed.setColor(settings.embedcolor)
        embed.setImage(body.url)
        embed.setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
    }
}
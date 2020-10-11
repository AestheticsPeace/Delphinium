const Discord = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
	name: 'feed',
	async execute(msg, args) {
        
        let user = msg.mentions.users.first() || msg.author
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/feed`);
        let embed = new Discord.RichEmbed()
        embed.setDescription(`**Eat your food ${user} >;c**`)
        embed.setColor(settings.embedcolor)
        embed.setImage(body.url)
        embed.setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
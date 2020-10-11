const Discord = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
	name: 'baka',
	async execute(msg, args) {
        
        let user = msg.mentions.users.first() || msg.author
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/baka`);
        let embed = new Discord.RichEmbed()
        embed.setDescription(`**${user} stop being such a dumb baka!! ;<**`)
        embed.setColor(settings.embedcolor)
        embed.setImage(body.url)
        embed.setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
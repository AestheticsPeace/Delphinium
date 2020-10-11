const Discord = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
	name: 'slap',
	async execute(msg, args) {
        
        let user = msg.mentions.users.first() || msg.author
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/slap`);
        let embed = new Discord.RichEmbed()
        embed.setDescription(`**${user} gets demolished by my superior slap**`)
        embed.setColor(settings.embedcolor)
        embed.setImage(body.url)
        embed.setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
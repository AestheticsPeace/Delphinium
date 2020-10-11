const Discord = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
	name: 'nsfwavatar',
	async execute(msg, args) {
        
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/nsfw_avatar`);
        let embed = new Discord.RichEmbed()
        embed.setTitle(`Here's a cheeky nsfw avatar ;D`)
        embed.setColor(settings.embedcolor)
        embed.setImage(body.url)
        embed.setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
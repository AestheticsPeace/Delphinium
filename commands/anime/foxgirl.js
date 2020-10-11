const Discord = require("discord.js");
const superagent = require("superagent");
const settings = require("./../../settings.json");

module.exports = {
	name: 'foxgirl',
	async execute(msg, args) {
        
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/img/fox_girl`);
        let embed = new Discord.RichEmbed()
        embed.setTitle('Have a cute foxy~ ^-^')
        embed.setColor(settings.embedcolor)
        embed.setImage(body.url)
        embed.setFooter(`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧                  ｡◕‿◕｡`) 
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
const superagent = require("superagent");
const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: '8ball',
	async execute(msg, args) {
        
        var {
            body
        } = await superagent
            .get(`https://nekos.life/api/v2/8ball`);
        let ques = args.join(" ")
        let embed = new Discord.RichEmbed()
        embed.setTitle('Magic 8Ball')
        embed.setColor(settings.embedcolor)
        embed.setDescription(`**${ques}` + '?**')
        embed.setImage(body.url)
        msg.channel.send(embed).then(() => {
            msg.delete()
        })
	}
}
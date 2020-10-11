const Discord = require("discord.js");
const settings = require("./../../settings.json");
const { meme } = require("memejs");

module.exports = {
	name: 'meme',
	async execute(msg, args) {
        
        meme(function(err, data) {
            if (err) return console.error(err);

            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setTitle(data.title)
            embed.setDescription(`**SubReddit: ${data.subreddit}**`)
            embed.setImage(data.url)
            embed.setFooter(`Author: ${data.author}`)

            msg.channel.send(embed).then(() => {msg.delete()})
        });
	}
}
const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'halftoken',
	async execute(msg, args) {
        
        if ((msg.mentions.users) && (msg.mentions.users.array().length > 0)) {
            var array = msg.mentions.users.array()
            for (var i = 0; i < array.length; i++) {
                var mention = array[i]
                if (mention.id) {
                    let embed = new Discord.RichEmbed()
                    embed.setColor(settings.embedcolor)
                    embed.setTitle('Half Discord Token')
                    embed.addField(mention.username + "#" + mention.discriminator, Buffer.from(mention.id).toString('base64'))

                    msg.channel.send(embed)
                    msg.delete()
                }
            }
        }
	}
}
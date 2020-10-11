const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'avatar',
	async execute(msg, args) {
        
        let user = msg.mentions.users.first() || msg.guild.members.find(mem => mem.user.username === args[0]) || msg.guild.members.find(mem => mem.user.tag === args[0]) || msg.guild.members.get(args[0]) || msg.author

        let embed = new Discord.RichEmbed()
        embed.setColor(settings.embedcolor)
        embed.setDescription(`**${user}'s Avatar**`)
        embed.setImage(user.displayAvatarURL)

        msg.channel.send(embed).then(() => {msg.delete()})
	}
}
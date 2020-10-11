const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'uinfo',
	async execute(msg, args) {
        
        try{
            var guild = await msg.guild.fetchMembers()
            let user = msg.mentions.users.first() || guild.members.find(mem => mem.user.username === args[0]) || guild.members.find(mem => mem.user.tag === args[0]) || guild.members.get(args[0]) || msg.author
            if (!user) user = msg.author
                let gameplayed = user.presence.game || 'No game'
                let embed = new Discord.RichEmbed()
                embed.setTitle(`${user.tag}`)
                embed.setThumbnail(user.displayAvatarURL)
                embed.setColor(settings.embedcolor)
                embed.setDescription(`User ID: ${user.id}`)
                embed.addField('User Created At', moment(user.createdAt).format("llll"), true)
                embed.addField('User Joined At', moment(msg.guild.member(user).joinedAt).format("llll"), true)
                embed.addField('Game', gameplayed, true)
                embed.addField('Bot', user.bot, true)
                embed.addField('Status, dnd/offline are same', user.presence.status)
                embed.addField(`Roles [${msg.guild.member(user).roles.size}]`, msg.guild.member(user).roles.map(r => r.toLocaleString()).join(" "))
                msg.channel.send(embed).then(() => {
                    msg.delete()
                })
            } catch(error) {
                send(error)
            }
	}
}
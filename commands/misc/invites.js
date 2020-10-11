const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'invites',
	async execute(msg, args) {
        
        var user = msg.mentions.users.first() || msg.author
        msg.guild.fetchInvites()
            .then(invites => {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id)
                var userInviteCount = 0;
                for (var i = 0; i < userInvites.length; i++) {
                    var invite = userInvites[i];
                    userInviteCount += invite['uses'];
                }
                let embed = new Discord.RichEmbed()
                embed.setTitle('Invites')
                embed.setColor(settings.embedcolor)
                embed.setThumbnail(`https://i.pinimg.com/originals/bc/0d/10/bc0d10e7d774a54825432f12d2469c1a.png`)
                embed.setDescription(`**${user} has ${userInviteCount} invites**`)
                msg.channel.send(embed).then(() => {
                    msg.delete()
                })
            })
	}
}
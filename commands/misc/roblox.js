const Discord = require("discord.js");
const settings = require("./../../settings.json");
const rover = require("rover-api");

module.exports = {
	name: 'roblox',
	async execute(msg, args) {

        function getProfileImage(id) {
            console.log(id)
            return new Promise((resolve) => {
                fetch(`https://thumbnails.roblox.com/v1/users/avatar?userIds=${id}&size=420x420&format=Png&isCircular=false&_=${id}`)
                    .then((req) => req.json())
                    .then((json) => resolve(json.data[0].imageUrl))
            })
        }
        
        if ((msg.mentions.users) && (msg.mentions.users.array().length > 0)) {
            var array = msg.mentions.users.array()
            let user = msg.mentions.users.first() || msg.guild.members.find(mem => mem.user.username === args[0]) || msg.guild.members.find(mem => mem.user.tag === args[0]) || msg.guild.members.get(args[0]) || msg.author
            for (var i = 0; i < array.length; i++) {
                var mention = array[i]
                if (mention.id) {
                    var Account = await rover(mention.id)
                    let embed = new Discord.RichEmbed()
                    embed.setThumbnail(await getProfileImage(Account.robloxId))
                    embed.setColor(settings.embedcolor)
                    embed.setTitle(`${mention.tag}'s Roblox Info`)
                    embed.addField('Username', Account.robloxUsername),
                        embed.addField('Roblox ID', Account.robloxId),
                        embed.addField('Profile Link', `https://www.roblox.com/users/${Account.robloxId}/profile`)
                    embed.setFooter(`ID: ${user.id}`)
                    msg.channel.send(embed)
                    msg.delete()
                }
            }
        }
	}
}
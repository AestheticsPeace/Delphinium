const Discord = require("discord.js");
const settings = require("./../../settings.json");
const moment = require("moment");

module.exports = {
    name: 'serverinfo',
    async execute(msg, args) {
       
        try {
            let PREMTIER = msg.guild.premiumTier || "None"
            let CONTENTFILT = msg.guild.explicitContentFilter || "Off"
            let BOOSTCOUNT = msg.guild.premiumSubscriptionCount || '0'
    
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setThumbnail(msg.guild.iconURL)
            embed.setDescription(`**Guild Info for __${msg.guild.name}__
    
            __General__
            > Name: ${msg.guild.name}
            > ID: ${msg.guild.id}
            > Owner (ID): ${msg.guild.ownerID}
            > Region: ${msg.guild.region}
            > Boost Tier: ${PREMTIER}
            > Explicit Filter: ${CONTENTFILT}
            > Verification Level: ${msg.guild.verificationLevel}
            > Time Created: ${moment(msg.guild.createdTimestamp).format('LL')}, ${moment(msg.guild.createdTimestamp).fromNow()}
            
            __Statistics__
            > Emoji Count: ${msg.guild.emojis.size}
            > Regular Emoji Count: ${msg.guild.emojis.filter(emoji => !emoji.animated).size}
            > Animated Emoji Count: ${msg.guild.emojis.filter(emoji => emoji.animated).size}
            > Member Count: ${msg.guild.members.size}
            > Humans: ${msg.guild.members.filter(m => !m.user.bot).size}
            > Bots: ${msg.guild.members.filter(m => m.user.bot).size}
            > Text Channels: ${msg.guild.channels.filter(c => c.type === 'text').size}
            > Voice Channels: ${msg.guild.channels.filter(c => c.type === 'voice').size}
            > Boost Count: ${BOOSTCOUNT}
            
            __Presence__
            > Online: ${msg.guild.members.filter(m => m.user.presence.status === 'online').size}
            > Idle: ${msg.guild.members.filter(m => m.user.presence.status === 'idle').size}
            > Do Not Disturb: ${msg.guild.members.filter(m => m.user.presence.status === 'dnd').size}
            > Offline: ${msg.guild.members.filter(m => m.user.presence.status === 'offline').size}
            
            __Roles__
            > Role Count: ${msg.guild.roles.size}**`)
            embed.setTimestamp()
            msg.channel.send(embed).then(() => {msg.delete()})
            } catch (error) {
                console.log(error)
            }
    }
}
const Discord = require("discord.js");
const settings = require("./../../settings.json");
const CONTACTINFO = require('./../../contact.json')

module.exports = {
	name: 'contactme',
	async execute(msg, args) {
        
        let embed = new Discord.RichEmbed()
        embed.setThumbnail(`http://www.clker.com/cliparts/m/j/s/g/j/L/contact-me-no-data-md.png`)
        embed.setColor(settings.embedcolor)
        embed.setTitle(`Contact Me At:`)
        embed.setDescription(`**Roblox Profile:
    ${CONTACTINFO.RobloxProfileLink}

    SnapChat:
    ${CONTACTINFO.SnapChatLink}

    Instagram:
    ${CONTACTINFO.InstagramLink}

    Twitch:
    ${CONTACTINFO.TwitchLink}

    Steam:
    ${CONTACTINFO.SteamLink}

    V3rmillion:
    ${CONTACTINFO.V3rmillion}
    **`)
        msg.channel.send(embed).then(() => msg.delete())
	}
}
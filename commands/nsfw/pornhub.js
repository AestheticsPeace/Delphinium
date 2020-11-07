const Discord = require("discord.js");
const settings = require("./../../settings.json");
const PornHub = require('pornhub.js')
const pornhub = new PornHub()

module.exports = {
    name: 'pornhub',
    async execute(msg, args) {
 
pornhub.search('Video', args.join(" ")).then(async res => {
    const vid = res.data[0]
    let embed = new Discord.RichEmbed()
    embed.setColor(settings.embedcolor)
    embed.setTitle(vid.title)
    embed.setThumbnail(`https://aesthetics-peace.s-ul.eu/2LSVgoc9IbVv1Ttp`)
    embed.setDescription(`**${vid.url}**`)
    embed.addField("Duration:", vid.duration, true)
    embed.addField("HD:", vid.hd, true)
    embed.addField("Premium:", vid.premium, true)
    embed.setTimestamp()
    await msg.channel.send(embed)
})

    }
}
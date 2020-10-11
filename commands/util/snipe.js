const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
    name: 'snipe',
    async execute(msg, args) {
       
        const sniped = msg.client.delMsg.get(`${msg.guild.id}_${msg.channel.id}`);
        if (!sniped) return msg.channel.send('There is no message to snipe')

    let embed = new Discord.RichEmbed()
    embed.setColor(settings.embedcolor)
    embed.setAuthor(`Deleted by ${sniped.author.tag}`)
    embed.setThumbnail(sniped.author.displayAvatarURL)
    embed.setDescription(sniped.content || '**Cannot show embeds**')
    embed.setTimestamp()

    msg.channel.send(embed).then(() => {msg.delete()})

    }
}
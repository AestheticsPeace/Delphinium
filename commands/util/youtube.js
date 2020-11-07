const Discord = require("discord.js");
const yt = require("yt-search");
const { util } = require("discord.js-commando");
const settings = require("./../../settings.json");

module.exports = {
    name: 'youtube',
    async execute(msg, args) {
       
        if (!args[0]) return msg.channel.send(`Gimme something to search for, damn`)
        yt(args.join(" "), (err, data) => {

        if (data.videos.length === 0) return msg.channel.send(`No result for given search`)
        if(err) throw err;
        const paginated = util.paginate(data.videos, 1, 15)

        let embed = new Discord.RichEmbed()
        embed.setDescription(paginated.items.map(v => `**[${v.title}](${v.url})** ${v.timestamp}`))
        embed.setColor(settings.embedcolor)
        msg.channel.send(embed)
    })


    }
}
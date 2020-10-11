const Discord = require("discord.js");
const settings = require("./../../settings.json");
const Anime = require('4anime-scraper').default;

module.exports = {
    name: 'search-anime',
    async execute(msg, args) {
       
        let input = args.join(" ")

        Anime.getAnimeFromSearch(input)
        .then(async res => {
            try {
                console.log(res[0]);
                let data = res[0]

                let embed = new Discord.RichEmbed()
                    embed.setColor(settings.embedcolor)
                    embed.setTitle('Anime Search Result:')
                    embed.setThumbnail(data.imageUrl)
                    embed.setDescription(`**${data.url}**`)
                    embed.setTimestamp()
                    embed.setFooter(`Data Gathered From 4anime.to`)
                    embed.addField('Type', data.type, true)
                    embed.addField('Status', data.status, true)
                    embed.addField('Release Date', data.releaseDate, true)
                    embed.addField('Description', data.description)
                msg.channel.send(embed).then(() => {msg.delete()})
            } catch (error) {
                let embed = new Discord.RichEmbed()
                embed.setColor(settings.embedcolor)
                embed.setDescription(`**Could not find anime specified**`)
                embed.setTimestamp()
                msg.channel.send(embed).then(() => {msg.delete()})
            }
        });
    }
}
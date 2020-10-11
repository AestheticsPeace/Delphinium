const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'lyrics',
	async execute(msg, args) {

        function getSong(name) {
            return new Promise(async function (resolve, reject) {
                var response = await fetch(`https://some-random-api.ml/lyrics/?title=${name}`)
                response = await response.json()
                resolve(response)
            })
        }
        
        if (args[0]) {
            var song = args.join(" ")
            var info = await getSong(song);
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setTitle('Lyrics')
            embed.setDescription(`**We searched the Internet and found the following Lyrics for you!**`)
            embed.setThumbnail(info.thumbnail.genius)
            embed.addField('Title', info.title)
            embed.addField('Author', info.author)
            embed.addField('Lyrics', 'Found in attached text file')
            
            
                var Attachment = new Discord.Attachment(Buffer.from(info.lyrics), "lyrics.txt")
                msg.channel.send({embed: embed, file: Attachment})
                msg.delete()

            if (info.error) {
                let embed = new Discord.RichEmbed()
                embed.setColor(settings.embedcolor)
                embed.setTitle('Lyrics')
                embed.setDescription(info.error)
                msg.channel.send(embed)
            }
            msg.delete()
        }
	}
}
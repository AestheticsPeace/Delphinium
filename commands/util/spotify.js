const Discord = require("discord.js");
const settings = require("./../../settings.json");
const { Client } = require("spotify-api.js");
const spotify = new Client("NO TOKEN");
const client_secret = settings.client_sec
const client_id = settings.client_ii

module.exports = {
    name: 'spotify',
    async execute(msg, args) {

        const token = await spotify.oauth.get({
            client_id: client_id,
            client_secret: client_secret,
        }); 

    const spotifyy = new Client(token)

       const track = await spotifyy.tracks.search(args.join(" "), {
           limit: 1,
        })
        const data = await track[0]
        if(!data) return msg.channel.send(`No track found for given args`)
        var ms = data.duration_ms,
        min = Math.floor((ms/1000/60) << 0),
        sec = Math.floor((ms/1000) % 60);

        console.log(min + ':' + sec);
        await console.log(track[0])
        let embed = new Discord.RichEmbed()
        embed.setTitle(`${data.name}`)
        embed.setColor(settings.embedcolor)
        embed.setThumbnail(`https://assets.entrepreneur.com/content/3x2/2000/20150616163611-spotify.jpeg`)
        embed.setDescription(`**Track: ${data.external_urls.spotify}\nAlbum: ${data.album.external_urls.spotify}**`)
        embed.addField(`Duration:`, `${min}m ${sec}s`, true)
        embed.addField(`Track ID:`, `${data.id}`, true)
        embed.addField(`Artist:`, `${data.artists[0].name}`, true)
        embed.addField(`Explicit:`, `${data.explicit}`, true)
        msg.channel.send(embed).then(() => {msg.delete()})
   }
}
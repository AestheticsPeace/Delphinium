const Discord = require("discord.js");
const settings = require("./../../settings.json");
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();

module.exports = {
    name: 'anime-thighs',
    async execute(msg, args) {

        DabiClient.nsfw.hentai.thighs().then(json => {
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setDescription(`**A juicy pair of thighs if you will**`) 
            embed.setImage(json.url)
            msg.channel.send(embed).then(() => { 
                msg.delete()
            })
        }).catch(error => {
            console.log(error);
        });
    }
}
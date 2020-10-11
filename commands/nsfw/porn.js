const Discord = require("discord.js");
const settings = require("./../../settings.json");
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();

module.exports = {
    name: 'porn',
    async execute(msg, args) {

        DabiClient.nsfw.real.random().then(json => {
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setDescription(`**Some nice content, good sir**`)
            embed.setImage(json.url)
            msg.channel.send(embed).then(() => { 
                msg.delete()
            })
        }).catch(error => {
            console.log(error);
        });
    }
}
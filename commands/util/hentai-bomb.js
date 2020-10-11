let interval;

const Discord = require("discord.js");
const settings = require("./../../settings.json");
const superagent = require("superagent");
const ms = require("ms");

module.exports = {
    name: 'hentai-bomb',
    async execute(msg, args) {
       
        let user = msg.mentions.users.first()
        let time = ms(`1s`)
        if (!interval) {
            interval = setInterval(async function () {
                var {
                    body
                } = await superagent
                    .get(`https://nekos.life/api/v2/img/classic`);
                    
                let embed = new Discord.RichEmbed()
                embed.setTitle(`Here's some nice hentai!`)
                embed.setColor(settings.embedcolor)
                embed.setImage(body.url)
                user.send(embed)
            }, time)

            msg.channel.send(`Starting the hentai bombing`)
            return;
        }

        if (args[0].toUpperCase() == 'OFF') {
            clearInterval(interval)
            interval = undefined;
            msg.channel.send('Ended the hentai bombing')
        }

    }
}
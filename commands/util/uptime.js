const Discord = require("discord.js");
const countdown = require("countdown");
const settings = require("./../../settings.json");

module.exports = {
    name: 'uptime',
    async execute(msg, args) {
       
        let time = countdown(msg.client.uptime, 0, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS)

        let embed = new Discord.RichEmbed()
        embed.setColor(settings.embedcolor)
        embed.setTitle('Delphinium Uptime')
        embed.setDescription(`**Days: ${time.days}\n Hours: ${time.hours}\n Minutes: ${time.minutes}\n Seconds: ${time.seconds}**`)

        msg.channel.send(embed).then(() => {msg.delete()})

    }
}
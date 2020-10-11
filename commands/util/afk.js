const Discord = require("discord.js");
const settings = require("./../../settings.json");
const { writeFileSync } = require("fs");

module.exports = {
    name: 'afk',
    async execute(msg, args) {
       
        if(settings.afk == undefined ? [] : settings.afk)
        if (settings.afk == undefined) {
            settings.afk = false
        }

        if(args[0].toUpperCase() == "OFF") {
            settings.afk = false
            writeFileSync("settings.json", JSON.stringify(settings))
            msg.channel.send('AFK Mode Off').then(() => {msg.delete()})
        } else {

        let input = args.join(" ") || `I'm currently away, Please dm me later`
        settings.afk = input
        msg.channel.send(`AFK Mode On, Message: ${args.join(" ")}`).then(() => {msg.delete()})
        
        writeFileSync("settings.json", JSON.stringify(settings))
        }
    }
}
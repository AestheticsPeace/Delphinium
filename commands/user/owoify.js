const Discord = require("discord.js");
const settings = require("./../../settings.json")
const { writeFileSync } = require("fs");

module.exports = {
	name: 'owoify',
	async execute(msg, args) {

        if(settings.owo == undefined ? [] : settings.owo)
        if (settings.owo == undefined) {
            settings.owo = false
        }
        if (args[0]) {
            var setting;
            if (args[0].toUpperCase() == "ON") {
                settings.owo = true
                msg.channel.send('OwOify Turned On').then(() => {msg.delete()})
            } else if (args[0].toUpperCase() == "OFF") {
                settings.owo = false
                msg.channel.send('OwOify Turned Off').then(() => {msg.delete()})
            }
        }
        writeFileSync("settings.json", JSON.stringify(settings))
        
	}
}
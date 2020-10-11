const Discord = require("discord.js");
const settings = require("./../../settings.json")
const { writeFileSync } = require("fs");

module.exports = {
	name: 'prefix',
	async execute(msg, args) {

        if(settings.prefix == undefined ? [] : settings.prefix)
        if (settings.prefix == undefined) {
            settings.prefix = "%"
        }
        
        let input = args.join("") || "%"
        settings.prefix = input
        msg.channel.send(`Prefix Changed To: "${input}", Restart Delphinium to get the change`).then(async() => {
        })
        
        writeFileSync("settings.json", JSON.stringify(settings))
        
	}
}
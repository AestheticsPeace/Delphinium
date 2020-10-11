const Discord = require("discord.js");
const fetch = require("node-fetch");
const googleTTS = require("google-tts-api");
const settings = require("./../../settings.json");

module.exports = {
	name: 'speak',
	async execute(msg, args) {
		if (args[0]) {
            var text = args.join(" ")
            var url = await googleTTS(text, "en", 1)
            fetch(url)
                .then(response => response.buffer())
                .then(buffer => {
                    var Attachment = new Discord.Attachment(buffer, "voice.mp3")
                    let embed = new Discord.RichEmbed()
                    embed.setColor(settings.embedcolor)
                    embed.setTitle('Text2Speech')
                    embed.setDescription(`You can find the spoken Text as an Attached mp3`)
        
                    msg.channel.send(embed)
                    msg.channel.send({file: Attachment})
                    msg.delete()
                    return;
                });
        }
	}
}
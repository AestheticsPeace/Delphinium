const figlet = require("figlet");
const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'ascii',
	async execute(msg, args) {
		if (args[0]) {
            figlet(args.join(" "), (err, ascii) => {
                if (err) {
                    let embed = new Discord.RichEmbed()
                    embed.setColor(settings.embedcolor)
                    embed.setTitle('Ascii')
                    embed.setDescription(`We had an error, please try again`)
                    
                    msg.channel.send(embed).then(() => {
                        msg.delete()
                    })
                    return;
                }
                send("```" + ascii + "```")
                msg.delete()
            })
        }
	}
}
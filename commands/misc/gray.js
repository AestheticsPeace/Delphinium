const Discord = require("discord.js");
const settings = require("./../../settings.json");
const Jimp = require("jimp");

module.exports = {
	name: 'gray',
	async execute(msg, args) {
        
        if ((msg.mentions.users) && (msg.attachments.size > 0)) {
            var files = Array.from(msg.attachments)
            if (files[0][1].height != undefined) {
                request({
                    url: files[0][1].url,
                    encoding: null
                }, async (err, resp, buffer) => {
                    var pic = await Jimp.read(buffer)
                    await pic.greyscale()
                    msg.channel.send({files: [await pic.getBufferAsync(pic.getMIME())]})
                    msg.delete()
                });
            }
        }
	}
}
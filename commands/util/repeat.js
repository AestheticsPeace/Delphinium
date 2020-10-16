let interval;

const Discord = require("discord.js");
const settings = require("./../../settings.json");
const ms = require("ms");

module.exports = {
    name: 'repeat',
    async execute(msg, args) {
       
        let time = ms(args[0])
        let message = args.join(" ").slice(args[0].length)
        if(!interval) {
            interval = setInterval(function() { msg.channel.send(message) }, time)
            send(`Starting your message: "${message} " on repeat for ${time}ms`)
            return;
         }
        
        if(args[0].toUpperCase() == 'OFF') {
        clearInterval(interval)
        interval = undefined;
        send('Ended the message repeating')
        }
    }
}

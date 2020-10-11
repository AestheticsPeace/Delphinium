let interval;

const Discord = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
	name: 'autofarm-mee6',
	async execute(msg, args) {

        let mesg = require('./../../assets/mee6msgs.json')

        if(args[0].toUpperCase() == 'ON')
        if(!interval) {
            msg.channel.send('Autofarm Started')
            interval = setInterval(function() { msg.channel.send(mesg[Math.floor(Math.random() * mesg.length)]).then(mesg => {mesg.delete(2000)}) }, 60000)
            return;
        }

    if(args[0].toUpperCase() == 'OFF') {
    clearInterval(interval)
    interval = null
    msg.channel.send('Autofarm Stopped')
    }
	}
}
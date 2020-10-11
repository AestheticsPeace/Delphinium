const Discord = require("discord.js");
const settings = require("./../../settings.json");
const { evalExpression } = require('@hkh12/node-calc');

module.exports = {
    name: 'calc',
    async execute(msg, args) {
       
        let input = args.join(" ")

        try {

        let math = evalExpression(input)
        let embed = new Discord.RichEmbed()
        embed.setColor(settings.embedcolor)
        embed.setTitle(`Evaluated Expression: ${input}`)
        embed.setDescription("```" + math + "```")

        msg.channel.send(embed).then(() => {msg.delete()})
        } catch(error) {

        let embed = new Discord.RichEmbed()
        embed.setColor(settings.embedcolor)
        embed.setTitle(`Evaluated Expression: Error`)
        embed.setDescription("```" + error + "```")
        
        }
    }
}
const Discord = require("discord.js");
const settings = require("./../../settings.json");
const { writeFileSync }= require("fs");
const crypto = require("crypto")
const prefix = settings.prefix

module.exports = {
    name: 'email',
    async execute(msg, args) {
       
        if (args[0]) {
            if (args[0].toLowerCase() == "toggle") {
                if (settings.email == undefined) {
                    settings.email = false
                }
                if (args[1]) {
                    var setting;
                    if (args[1].toUpperCase() == "ON") {
                        setting = true
                    } else if (args[1].toUpperCase() == "OFF") {
                        setting = false
                    }
                    if (setting == undefined) {
                        let embed = new Discord.RichEmbed()
                        embed.setColor(settings.embedcolor)
                        embed.setTitle('Email')
                        embed.setDescription("Usage: " + prefix + "email toggle [ON/OFF]")
 
                        msg.channel.send(embed)
                        msg.delete()
                        return
                    }
                    settings.email = setting
                } else {
                    settings.email = !settings.email
                }
                writeFileSync("settings.json", JSON.stringify(settings))
                let embed = new Discord.RichEmbed()
                        embed.setColor(((settings.email == true) && 0x6cc24a) || 0xff0000)
                        embed.setTitle('Email')
                        embed.setDescription(((settings.email == true) && "Enabled Emailservices") || "Disabled Emailservices")
               
                msg.channel.send(embed)
                msg.delete()
                return
            }
            if (args[0].toLowerCase() == "generate") {
                settings.emails = settings.emails == undefined ? [] : settings.emails
                if (settings.emails.length < 10) {
                    var mail = crypto.randomBytes(4).toString('hex') + "@vewku.com"
                    let embed = new Discord.RichEmbed()
                        embed.setColor(settings.embedcolor)
                        embed.setTitle('Email')
                        embed.setDescription("Generated Email: ```" + mail + "```")
                    settings.emails.push(mail)
                    writeFileSync("settings.json", JSON.stringify(settings))
                    msg.channel.send(embed)
                    msg.delete()
                    return
                } else {
                    let embed = new Discord.RichEmbed()
                        embed.setColor(settings.embedcolor)
                        embed.setTitle('Email')
                        embed.setDescription("You exceeded the maximum amount of 10 Emails! Delete one with " + prefix + "email delete [email] !")
                    
                    msg.channel.send(embed)
                    msg.delete()
                    return
                }
            }
            if (args[0].toLowerCase() == "remove") {
                settings.emails = settings.emails == undefined ? [] : settings.emails
                if (args[1]) {
                    if (settings.emails.includes(args[1])) {
                        let embed = new Discord.RichEmbed()
                        embed.setColor(settings.embedcolor)
                        embed.setTitle('Email')
                        embed.setDescription("Removed the email **" + args[1] + "**!")
                        settings.emails.splice(settings.emails.indexOf(args[1]), 1)
                        writeFileSync("settings.json", JSON.stringify(settings))
                        msg.channel.send(embed)
                        msg.delete()
                        return
                    } else {
                        let embed = new Discord.RichEmbed()
                        embed.setColor(settings.embedcolor)
                        embed.setTitle('Email')
                        embed.setDescription("Could not find the Email **" + args[1] + "** in the Database.")
                        
                        msg.channel.send(embed)
                        msg.delete()
                        return
                    }
                } else {
                    let embed = new Discord.RichEmbed()
                        embed.setColor(settings.embedcolor)
                        embed.setTitle('Email')
                        embed.setDescription("Usage: **" + prefix + "email remove [email]**!")
                    
                    msg.channel.send(embed)
                    msg.delete()
                    return
                }
            }
            if (args[0].toLowerCase() == "list") {
                settings.emails = settings.emails == undefined ? [] : settings.emails
                if (settings.emails.length > 0) {
                    var mails = settings.emails.join("\n")
                    let embed = new Discord.RichEmbed()
                    embed.setColor(settings.embedcolor)
                    embed.setTitle('Email')
                    embed.setDescription("Your Emails: ```" + mails + "```")
                    
                    msg.channel.send(embed)
                    msg.delete()
                    return
                } else {
                    let embed = new Discord.RichEmbed()
                    embed.setColor(settings.embedcolor)
                    embed.setTitle('Email')
                    embed.setDescription("You do not have any mails right now, generate one with **" + prefix + "email generate**!")

                    msg.channel.send(embed)
                    msg.delete()
                    return
                }
            }
        } else {
            let embed = new Discord.RichEmbed()
                    embed.setColor(settings.embedcolor)
                    embed.setTitle('Email')
                    embed.setDescription("Usage: " + prefix + "email [toggle/generate/remove/list]")
        
            msg.channel.send(embed)
            msg.delete()
            return
        }
    }
}
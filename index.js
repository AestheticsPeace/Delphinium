const Discord = require('discord.js');
const { readdirSync, lstatSync, writeFileSync} = require("fs");
const settings = require("./settings.json")
const prefix = settings.prefix
const client = new Discord.Client()
const owoify = require("owoifyx");
const fetch = require("node-fetch");

const cmdsDir = readdirSync('commands')
const eventsDir = readdirSync('events')

client.delMsg = new Map()
client.commands = {}

var loggerwebhook;
var webhook;
var loggerwebhook;
var announcewebhook;
var changelogwebhook;
var nitrowebhook;
var giveawaywebhook;
var codewebhook;

for (let i = 0; i < eventsDir.length; i++) {
	client.on(eventsDir[i].split('.')[0], (...params) => {
		if (Array.isArray(params) && params.length > 0)
			require(`./events/${eventsDir[i]}`)(...params)
		else
			require(`./events/${eventsDir[i]}`)(client)
	})
}

client.fldrToggle = true
for (let i = 0; i < cmdsDir.length; i++) {
	let cmd_or_dir = cmdsDir[i]

	if (!client.fldrToggle)
		client.commands[cmd_or_dir.split('.')[0]] = require(`./commands/${cmd_or_dir}`)
	else if (lstatSync(`commands/${cmd_or_dir}`).isDirectory()) {
		client.commands[cmd_or_dir] = {}

		let categoryDir = readdirSync(`commands/${cmd_or_dir}`)
		for (let i2 = 0; i2 < categoryDir.length; i2++) {
			let cmdFile = categoryDir[i2]
			if (lstatSync(`commands/${cmd_or_dir}/${cmdFile}`).isFile()) {
				client.commands[cmd_or_dir][cmdFile.split('.')[0]] = require(`./commands/${cmd_or_dir}/${cmdFile}`)
			}
		}
	}
}

client.on('message', async msg => {
    if(settings.owo === true) {
		let m = await msg.channel.fetchMessages({ limit: 1 })
			 .then(async messages => {
				 messages.forEach(async m => {
					 if (m.author.id == msg.client.user.id) {
						 await m.edit(owoify(m.content))
					 }
				 });
			 })
        }
         if(!settings.afk === false) {
            if(msg.channel.type === "dm") {
                if(msg.author.id !== client.user.id) {
                    msg.channel.send(settings.afk)
                }
            }
        }
        if(settings.slotbot === true) {
            if(msg.author.id === '346353957029019648') {
                if(msg.content.startsWith('Someone just dropped their wallet in this channel!')) {
                    msg.channel.send('~grab')
                }
            }
        }
})

client.on('ready', async () => {
    if(settings.prefix == undefined ? [] : settings.prefix)
        if (settings.prefix == undefined) {
            settings.prefix = "%"
        }
    function getimage(url) {
        return new Promise((resolve) => {
            fetch(url)
                .then(response => response.buffer())
                .then(buffer => resolve(buffer))
        })
    }

    var guildid = settings.guild;
    var version = "BETA-0.0.7";

    var guild;
    img = await getimage("https://i.imgur.com/QlCY5xy.jpg")
    infoimg = await getimage("https://i.imgur.com/DJFxfZw.png")
    if (guildid != undefined) {
        var guilds = client.guilds.array()
        for (let i = 0; i < guilds.length; i++) {
            const tempguild = guilds[i];
            if (tempguild.id == guildid) {
                guild = tempguild
                break;
            }
        }
    }
    if (guild == undefined) {
        guild = await client.user.createGuild('Delphinium', "eu-central", img);
        settings.guild = guild.id
        guildid = guild.id
        var channels = guild.channels.array()
        for (var i = 0; i < channels.length; i++) {
            if (channels[i].delete) {
                channels[i].delete()
            }
        }
        writeFileSync("settings.json", JSON.stringify(settings))
    }
    var channel;
    var loggerchannel;
    var changelogchannel;
    var updatechannel;
    var nitrochannel;
    var giveawaychannel;
    var informationcategory;
    var announcementscategory;
    var snipercategory;
    var emailcategory;
    var codechannel;
    var channels = guild.channels.array();

    for (var i = 0; i < channels.length; i++) {
        var tempchannel = channels[i]
        if ((tempchannel.name == "messages") && (tempchannel.type == "text")) {
            channel = tempchannel
        } else if ((tempchannel.name == "logger") && (tempchannel.type == "text")) {
            loggerchannel = tempchannel
        } else if ((tempchannel.name == "announcements") && (tempchannel.type == "category")) {
            announcementscategory = tempchannel
        } else if ((tempchannel.name == "information") && (tempchannel.type == "category")) {
            informationcategory = tempchannel
        } else if ((tempchannel.name == "changelogs") && (tempchannel.type == "text")) {
            changelogchannel = tempchannel
        } else if ((tempchannel.name == "important") && (tempchannel.type == "text")) {
            updatechannel = tempchannel
        } else if ((tempchannel.name == "sniper-logs") && (tempchannel.type == "category")) {
            snipercategory = tempchannel
        } else if ((tempchannel.name == "nitro") && (tempchannel.type == "text")) {
            nitrochannel = tempchannel
        } else if ((tempchannel.name == "giveaway") && (tempchannel.type == "text")) {
            giveawaychannel = tempchannel
        } else if ((tempchannel.name == "trash-mail") && (tempchannel.type == "category")) {
            emailcategory = tempchannel
        } else if ((tempchannel.name == "codes") && (tempchannel.type == "text")) {
            codechannel = tempchannel
        }
    }
    if (announcementscategory == undefined) {
        announcementscategory = (await guild.createChannel("announcements", {
            type: "category"
        }))
    }
    if (informationcategory == undefined) {
        informationcategory = (await guild.createChannel("information", {
            type: "category"
        }))
    }
    if (snipercategory == undefined) {
        snipercategory = (await guild.createChannel("sniper-logs", {
            type: "category"
        }))
    }
    if (emailcategory == undefined) {
        emailcategory = (await guild.createChannel("trash-mail", {
            type: "category"
        }))
    }
    if (nitrochannel == undefined) {
        nitrochannel = (await guild.createChannel("nitro", {
            topic: "You will find the outputs of our " + prefix + "nitro-snipe command in this channel!.",
            parent: snipercategory
        }))
    }
    if (codechannel == undefined) {
        codechannel = (await guild.createChannel("codes", {
            topic: "You will find the verify codes that get send to your mail generated by " + prefix + "email",
            parent: emailcategory
        }))
    }
    if (giveawaychannel == undefined) {
        giveawaychannel = (await guild.createChannel("giveaway", {
            topic: "You will find the outputs of our " + prefix + "giveaway-snipe command in this channel!.",
            parent: snipercategory
        }))
    }
    if (updatechannel == undefined) {
        updatechannel = (await guild.createChannel("important", {
            topic: "This channel will be used by the Devs to inform you about new Updates regarding the Selfbot.",
            parent: announcementscategory
        }))
    }
    if (changelogchannel == undefined) {
        changelogchannel = (await guild.createChannel("changelogs", {
            topic: "You will find all the changes from the versions you download in this channel.",
            parent: announcementscategory
        }))
    }
    if (channel == undefined) {
        channel = (await guild.createChannel("messages", {
            topic: "If you enable the Safemode with " + prefix + "safemode all outputs from the Selfbot will get redirected to this channel.",
            parent: informationcategory
        }))
    }
    if (loggerchannel == undefined) {
        loggerchannel = (await guild.createChannel("logger", {
            topic: "The message-logger outputs that you can toggle with " + prefix + "logger will be displayed here!",
            parent: informationcategory
        }))
    }
    var webhooks = await channel.fetchWebhooks()
    webhook = webhooks.array()[0]
    var loggerwebhooks = await loggerchannel.fetchWebhooks()
    loggerwebhook = loggerwebhooks.array()[0]
    var announcewebhooks = await updatechannel.fetchWebhooks()
    announcewebhook = announcewebhooks.array()[0]
    var changelogwebhooks = await changelogchannel.fetchWebhooks()
    changelogwebhook = changelogwebhooks.array()[0]
    var loggerwebhooks = await loggerchannel.fetchWebhooks()
    loggerwebhook = loggerwebhooks.array()[0]
    var nitrowebhooks = await nitrochannel.fetchWebhooks()
    nitrowebhook = nitrowebhooks.array()[0]
    var giveawaywebhooks = await giveawaychannel.fetchWebhooks()
    giveawaywebhook = giveawaywebhooks.array()[0]
    var codewebhooks = await codechannel.fetchWebhooks()
    codewebhook = codewebhooks.array()[0]

    if (webhook == undefined) {
        webhook = await channel.createWebhook("Information", infoimg)
    }

    if (nitrowebhook == undefined) {
        nitrowebhook = await nitrochannel.createWebhook("Nitro Sniper")
    }

    if (codewebhook == undefined) {
        codewebhook = await codechannel.createWebhook("Email Code")
    }

    if (giveawaywebhook == undefined) {
        giveawaywebhook = await giveawaychannel.createWebhook("Giveaway Sniper")
    }

    if (changelogwebhook == undefined) {
        changelogwebhook = await changelogchannel.createWebhook("Changelogs")
    }

    if (announcewebhook == undefined) {
        announcewebhook = await updatechannel.createWebhook("Dev Team", img)
        announcewebhook.send("@everyone", {
            embeds: [{
                "title": "Announcement",
                "description": "This is an announcement made by the Dev Team!",
                "color": 0x6cc24a,
                "fields": [{
                        "name": "Thank you!",
                        "value": "Thank you for choosing Delphinium!"
                    },
                    {
                        "name": "Bugs",
                        "value": "This Selfbot is still in early Beta, please report all bugs in our Discord Server!"
                    },
                    {
                        "name": "Updates",
                        "value": "We will soon implement that you will be notified through this channel ones an update Drops but as of new we do not have such an Feature so feel free to join our Discord Server or stalk our Github to find out about new Updates!",
                        "inline": true
                    },
                    {
                        "name": "Discord",
                        "value": "https://discord.gg/ue9gRSP",
                        "inline": true
                    }
                ]
            }]
        })
    }
    fetch('https://raw.githubusercontent.com/StayWithMeSenpai/Delphinium/master/VERSION')
        .then(res => res.text())
        .then(body => {
            body = body.replace("\n", "")
            if (version != body) {
                announcewebhook.send("@everyone", {
                    embeds: [{
                        "title": "Delphinium got a new Update!",
                        "color": 0x6cc24a,
                        "description": "An new update for Delphinium came out! Get it on our [Github](https://github.com/StayWithMeSenpai/Delphinium).",
                        "fields": [{
                                "name": "Current-Version",
                                "value": version,
                                "inline": true
                            },
                            {
                                "name": "New-Version",
                                "value": body,
                                "inline": true
                            },
                            {
                                "name": "Download",
                                "value": "You can download the latest Update from our [Github](https://github.com/StayWithMeSenpai/Delphinium)!"
                            }
                        ]
                    }]
                })
            }
        });

    if (loggerwebhook == undefined) {
        loggerwebhook = await loggerchannel.createWebhook("Message Logger")
    }

    if (settings.version != version) {
        changelogwebhook.send("@everyone", {
            embeds: [{
                "title": "Delphinium Changelog!",
                "color": 0x6cc24a,
                "description": "Be sure to always have the newest version downloaded from our [Github](https://github.com/StayWithMeSenpai/Delphinium).",
                "fields": [{
                        "name": "Old-Version",
                        "value": settings.version ? settings.version : "none",
                        "inline": true
                    },
                    {
                        "name": "New-Version",
                        "value": version,
                        "inline": true
                    },
                    {
                        "name": "Changelog",
                        "value": "```+ Fixed bugs\n+ Updated uinfo\n+ Commands:\n%contactme\n%brilliance\n%balance\n%bravery\n%kiss [Mention]\n%hug [Mention]\n%fuck [Mention]\n%randomnum\n%eval [Code]\n%servroles\n%hentai\n%solo\n%trap\n%playing [Text]\n%streaming [Text]\n%watching [Text]\n%listening [Text]\n%suicide\n%steal-pfp [Mention]```"
                    }
                ]
            }]
        })
        settings.version = version
        writeFileSync("settings.json", JSON.stringify(settings))
    }
})

client.on("message", msg => {
    if ((settings.giveaway == true) && (giveawaywebhook != undefined)) {
        try {
            if (msg.author.id == 294882584201003009) {
                if (msg.content == "<:yay:585696613507399692>   **GIVEAWAY**   <:yay:585696613507399692>") {
                    setInterval(function() {
                    msg.react("🎉")
                    }, 60000).then(() => {
                        giveawaywebhook.send("", {
                            embeds: [{
                                "title": "Giveaway Sniper",
                                "color": 0x6cc24a,
                                "description": "You just joined an Giveaway!",
                                "fields": [{
                                        "name": "Price",
                                        "value": msg.embeds[0].author.name || "**Yo we fucked up**",
                                        "inline": true
                                    },
                                    {
                                        "name": "Channel",
                                        "value": "<#" + msg.channel.id + ">",
                                        "inline": true
                                    },
                                    {
                                        "name": "Server",
                                        "value": msg.guild.name,
                                        "inline": true
                                    }
                                ]
                            }]
                        })
                    })

                }
            }
        } catch (error) {

        }
    }
})

client.on('message', async msg => {
    if (msg.author.id == client.user.id) return;
    try {
        if ((settings.nitro == true) && (nitrowebhook != undefined)) {
            if (msg.content.includes("discordapp.com/gifts/") || msg.content.includes("discord.gift/")) {
                var starttime = Date.now()
                if (msg.content.includes("discordapp.com/gifts/")) {

                    var code = msg.content.split("discordapp.com/gifts/").pop().replace(/\s+/g, " ").split(' ')[0]
                    if (attempted.includes(code) == false) {
                        const https = require('https')

                        const options = {
                            hostname: "discordapp.com",
                            port: 443,
                            path: "/api/v6/entitlements/gift-codes/" + code + "/redeem",
                            method: "POST",
                            headers: {
                                "Authorization": settings.token
                            }
                        }

                        const req = https.request(options, (res) => {
                            var data = "";

                            res.on('data', (d) => {
                                data += d
                            })

                            res.on("end", () => {
                                data = JSON.parse(data)
                                nitrowebhook.send("", {
                                    embeds: [{
                                        "title": "Nitro Sniper",
                                        "color": 0x6cc24a,
                                        "description": "We just attempted to redeem an code and here are the results:",
                                        "fields": [{
                                                "name": "Code",
                                                "value": code,
                                                "inline": true
                                            },
                                            {
                                                "name": "Status",
                                                "value": data.message,
                                                "inline": true
                                            },
                                            {
                                                "name": "Author",
                                                "value": msg.author.tag,
                                                "inline": true
                                            },
                                            {
                                                "name": "Speed",
                                                "value": ((starttime - Date.now()) / 1000) + "s",
                                                "inline": true
                                            }
                                        ]
                                    }]
                                })
                            })
                        })

                        req.on('error', (error) => {
                            nitrowebhook.send("", {
                                embeds: [{
                                    "title": "Nitro Sniper",
                                    "color": 0x6cc24a,
                                    "description": "We just attempted to redeem an code and here are the results:",
                                    "fields": [{
                                            "name": "Code",
                                            "value": code,
                                            "inline": true
                                        },
                                        {
                                            "name": "Status",
                                            "value": "We encounterd an error while trying to redeem this code!",
                                            "inline": true
                                        }
                                    ]
                                }]
                            })
                        })

                        req.end()
                    } else {
                        nitrowebhook.send("", {
                            embeds: [{
                                "title": "Nitro Sniper",
                                "color": 0x6cc24a,
                                "description": "We just attempted to redeem an code and here are the results:",
                                "fields": [{
                                        "name": "Code",
                                        "value": code,
                                        "inline": true
                                    },
                                    {
                                        "name": "Status",
                                        "value": "Already attempted!",
                                        "inline": true
                                    },
                                    {
                                        "name": "Author",
                                        "value": message.author.tag,
                                        "inline": true
                                    },
                                    {
                                        "name": "Speed",
                                        "value": ((Date.now() - starttime) / 1000) + "s",
                                        "inline": true
                                    }
                                ]
                            }]
                        })
                    }
                } else if (msg.content.includes("discord.gift/")) {
                    var code = msg.content.split("discord.gift/").pop().replace(/\s+/g, " ").split(' ')[0]
                    if (attempted.includes(code) == false) {
                        const https = require('https')

                        const options = {
                            hostname: "discordapp.com",
                            port: 443,
                            path: "/api/v6/entitlements/gift-codes/" + code + "/redeem",
                            method: "POST",
                            headers: {
                                "Authorization": settings.token
                            }
                        }

                        const req = https.request(options, (res) => {
                            var data = "";

                            res.on('data', (d) => {
                                data += d
                            })

                            res.on("end", () => {
                                data = JSON.parse(data)
                                nitrowebhook.send("", {
                                    embeds: [{
                                        "title": "Nitro Sniper",
                                        "color": 0x6cc24a,
                                        "description": "We just attempted to redeem an code and here are the results:",
                                        "fields": [{
                                                "name": "Code",
                                                "value": code,
                                                "inline": true
                                            },
                                            {
                                                "name": "Status",
                                                "value": data.message,
                                                "inline": true
                                            },
                                            {
                                                "name": "Author",
                                                "value": msg.author.tag,
                                                "inline": true
                                            },
                                            {
                                                "name": "Speed",
                                                "value": ((Date.now() - starttime) / 1000) + "s",
                                                "inline": true
                                            }
                                        ]
                                    }]
                                })
                            })
                        })

                        req.on('error', (error) => {
                            nitrowebhook.send("", {
                                embeds: [{
                                    "title": "Nitro Sniper",
                                    "color": 0x6cc24a,
                                    "description": "We just attempted to redeem an code and here are the results:",
                                    "fields": [{
                                            "name": "Code",
                                            "value": code,
                                            "inline": true
                                        },
                                        {
                                            "name": "Status",
                                            "value": "We encounterd an error while trying to redeem this code!",
                                            "inline": true
                                        }
                                    ]
                                }]
                            })
                        })

                        req.end()
                    } else {
                        nitrowebhook.send("", {
                            embeds: [{
                                "title": "Nitro Sniper",
                                "color": 0x6cc24a,
                                "description": "We just attempted to redeem an code and here are the results:",
                                "fields": [{
                                        "name": "Code",
                                        "value": code,
                                        "inline": true
                                    },
                                    {
                                        "name": "Status",
                                        "value": "Already attempted!",
                                        "inline": true
                                    }, ,
                                    {
                                        "name": "Author",
                                        "value": msg.author.tag,
                                        "inline": true
                                    },
                                    {
                                        "name": "Speed",
                                        "value": ((Date.now() - starttime) / 1000) + "s",
                                        "inline": true
                                    }
                                ]
                            }]
                        })
                    }
                }
            }
        }
    } catch (error) {

    }
})

client.on("messageDelete", async (msg) => {

    if ((loggerwebhook != undefined) && (settings.logger == true) && (msg.author.id != client.user.id)) {if (loggerwebhook == undefined) {
    }
        var embed = {
            "title": "Message Logger",
            "description": "A message got deleted!",
            "color": 0x6cc24a,
            "fields": [{
                    "name": "Message",
                    "value": msg.content == "" ? "**Embed, cannot be displayed.**" : msg.content,
                    "inline": true
                },
                {
                    "name": "Channel Type",
                    "value": msg.channel.type,
                    "inline": true
                }
            ]
        }
        if (msg.channel.type == "text") {
            embed.fields.push({
                "name": "Channel",
                "value": "#" + msg.channel.name,
                "inline": true
            })
            embed.fields.push({
                "name": "Server",
                "value": msg.guild.name,
                "inline": true
            })
        }
        if (msg.channel.type == "dm") {
            embed.fields.push({
                "name": "Recipient",
                "value": msg.channel.recipient.username + "#" + msg.channel.recipient.discriminator,
                "inline": true
            })
        }
        if (msg.channel.type == "group") {
            var members = client.user.username + "#" + client.user.discriminator
            var recipients = msg.channel.recipients.array()
            for (var i = 0; i < recipients.length; i++) {
                members += "," + recipients[i].username + "#" + recipients[i].discriminator
            }
            embed.fields.push({
                "name": "Members",
                "value": members,
                "inline": true
            })
            embed.fields.push({
                "name": "Group Name",
                "value": msg.channel.name,
                "inline": true
            })
        }
        embed.fields.push({
            "name": "Author",
            "value": msg.author.username + "#" + msg.author.discriminator,
            "inline": true
        })
        loggerwebhook.send("", {
            embeds: [embed]
        }).catch(() => {
        })
    }
})

client.on("messageUpdate", async (oldmsg, msg) => {
    var oldcontent = oldmsg.content,
        newcontent = msg.content
    if (oldcontent == newcontent) {
        return;
    }
    if ((loggerwebhook != undefined) && (settings.logger == true) && (msg.author.id != client.user.id)) {
        var embed = {
            "title": "Message Logger",
            "description": "A message got edited!",
            "color": 0x6cc24a,
            "fields": [{
                    "name": "Old Message",
                    "value": oldcontent == "" ? "**Embed, cannot be displayed.**" : oldcontent,
                    "inline": true
                },
                {
                    "name": "New Message",
                    "value": newcontent == "" ? "**Embed, cannot be displayed.**" : newcontent,
                    "inline": true
                },
                {
                    "name": "Channel Type",
                    "value": msg.channel.type,
                    "inline": true
                }
            ]
        }
        if (msg.channel.type == "text") {
            embed.fields.push({
                "name": "Channel",
                "value": "#" + msg.channel.name,
                "inline": true
            })
            embed.fields.push({
                "name": "Server",
                "value": msg.guild.name,
                "inline": true
            })
        }
        if (msg.channel.type == "dm") {
            embed.fields.push({
                "name": "Recipient",
                "value": msg.channel.recipient.username + "#" + msg.channel.recipient.discriminator,
                "inline": true
            })
        }
        if (msg.channel.type == "group") {
            var members = client.user.username + "#" + client.user.discriminator
            var recipients = msg.channel.recipients.array()
            for (var i = 0; i < recipients.length; i++) {
                members += "," + recipients[i].username + "#" + recipients[i].discriminator
            }
            embed.fields.push({
                "name": "Members",
                "value": members,
                "inline": true
            })
            embed.fields.push({
                "name": "Group Name",
                "value": msg.channel.name,
                "inline": true
            })
        }
        embed.fields.push({
            "name": "Author",
            "value": msg.author.username + "#" + msg.author.discriminator,
            "inline": true
        })
        loggerwebhook.send("", {
            embeds: [embed]
        }).catch(() => {

        })
    }
})

client.login(settings.token)

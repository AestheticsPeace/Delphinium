const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'copydiscord',
	async execute(msg, args) {

        function getimage(url) {
            return new Promise((resolve) => {
                fetch(url)
                    .then(response => response.buffer())
                    .then(buffer => resolve(buffer))
            })
        }

        function until(conditionFunction) {

            const poll = resolve => {
                if (conditionFunction()) resolve();
                else setTimeout(_ => poll(resolve), 400);
            }
        
            return new Promise(poll);
        }
        
        if (msg.guild) {
            var mainguild = msg.guild
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setTitle(`Discord Copier`)
            embed.setDescription(`We are now going to duplicate this server and a new version should popup in your serverlist!`)
            
            msg.channel.send(embed)
            msg.delete()
            var guild = await msg.client.user.createGuild(mainguild.name, mainguild.region, (mainguild.iconURL !== null ? await getimage(mainguild.iconURL) : undefined))
            var categorys = {}
            guild.setAFKTimeout(mainguild.afkTimeout)
            var channels = mainguild.channels.array()
            var mroles = mainguild.roles.array()
            var gchannels = guild.channels.array()
            var roles = {}
            gchannels.forEach(async channel => {
                channel.delete()
            });
            for (var i = 0; i < mroles.length; i++) {
                var role = mroles[i]
                if (role.id == mainguild.id) {
                    var nrole = await guild.defaultRole.edit({
                        name: role.name,
                        color: role.color,
                        hoist: role.hoist,
                        position: role.position,
                        permissions: role.permissions,
                        mentionable: role.mentionable
                    })
                    roles[role.id.toString()] = nrole
                } else {
                    var nrole = await guild.createRole({
                        name: role.name,
                        color: role.color,
                        hoist: role.hoist,
                        position: role.position,
                        permissions: role.permissions,
                        mentionable: role.mentionable
                    })
                    roles[role.id.toString()] = nrole
                }
            }
            await new Promise(async (resolve) => {
                var finished = 0
                var started = 0
                for (var i = 0; i < channels.length; i++) {
                    var channel = channels[i]
                    if (channel.type == "category") {
                        started++
                        var permissionOverwrites = []
                        channel.permissionOverwrites.array().forEach(perms => {
                            var role = roles[perms.id.toString()]
                            if (role) {
                                permissionOverwrites.push({
                                    id: roles[perms.id],
                                    allow: perms.allow,
                                    deny: perms.deny
                                })
                            }
                        })
                        var nchannel = await guild.createChannel(channel.name, {
                            permissionOverwrites: permissionOverwrites,
                            type: channel.type,
                            name: channel.name,
                            position: channel.position,
                            topic: channel.topic,
                            nsfw: channel.nsfw,
                            bitrate: channel.bitrate,
                            userLimit: channel.userLimit,
                            rateLimitPerUser: channel.rateLimitPerUser
                        })
                        categorys[channel.id.toString()] = nchannel
                        finished++
                        if (finished == started) {
                            resolve()
                        }
                    }
                }
            })
            channels.forEach(async channel => {
                if (channel.type != "category") {
                    var permissionOverwrites = []
                    channel.permissionOverwrites.array().forEach(perms => {
                        var role = roles[perms.id.toString()]
                        if (role) {
                            permissionOverwrites.push({
                                id: roles[perms.id],
                                allow: perms.allow,
                                deny: perms.deny
                            })
                        }
                    })
                    var parent
                    if (channel.parent) {
                        await until(_ => categorys[channel.parent.id] != undefined)
                        if (categorys[channel.parent.id]) {
                            parent = categorys[channel.parent.id]
                        }
                    }
                    var nchannel = await guild.createChannel(channel.name, {
                        parent: parent,
                        permissionOverwrites: permissionOverwrites,
                        type: channel.type,
                        name: channel.name,
                        position: channel.position,
                        topic: channel.topic,
                        nsfw: channel.nsfw,
                        userLimit: channel.userLimit,
                        rateLimitPerUser: channel.rateLimitPerUser
                    })
                }
            })
        } else {
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            embed.setTitle(`Discord Copier`)
            embed.setDescription(`You executed this command in an Channel thats not in an server!`)
            
            msg.channel.send(embed)
            msg.delete()
        }
	}
}
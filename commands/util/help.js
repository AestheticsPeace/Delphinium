const Discord = require("discord.js");
const settings = require("./../../settings.json");
const prefix = settings.prefix;

module.exports = {
	name: 'help',
	async execute(msg, args) {
        
        if(!args[0]) {
            let embed = new Discord.RichEmbed()
            embed.setTitle('Delphinium SelfBot')
            embed.setColor(settings.embedcolor)
            embed.setThumbnail(`https://cdn.discordapp.com/icons/757714744756011179/e368c0feb85793793a26b9e9397d3a09.jpg`)
            embed.setDescription(`**${prefix}help**` + ' `moderation` ' + ` **${prefix}help**` + ' `user` ' + `\n\n**${prefix}help**` + ' `anime` ' + ` **${prefix}help**` + ' `util` ' + `\n\n**${prefix}help**` + ' `misc` ' + ` **${prefix}help**` + ' `nsfw` ')
            embed.setFooter('We hope you enjoy the bot! - Delphinium Dev Team')

            msg.channel.send(embed).then(() => {msg.delete()})
        }

        if(args[0].toUpperCase() == 'MODERATION') {
            let embed = new Discord.RichEmbed()
            embed.setTitle('Delphinium SelfBot: Moderation')
            embed.setColor(settings.embedcolor)
            embed.setThumbnail(`https://cdn.discordapp.com/icons/757714744756011179/e368c0feb85793793a26b9e9397d3a09.jpg`)
            embed.setDescription('```' + `${prefix}massban -- Bans everyone you can\n${prefix}massunban -- Unbans everyone\n${prefix}masskick -- Kicks everyone you can\n${prefix}massmute -- Mutes everyone you can\n${prefix}massunmute -- Unmutes everyone you can\n${prefix}wizz -- Server nuker` + '```')
            embed.setFooter('We hope you enjoy the bot! - Delphinium Dev Team')

            msg.channel.send(embed).then(() => {msg.delete()})
        }

        if(args[0].toUpperCase() == 'UTIL') {
            let embed = new Discord.RichEmbed()
            embed.setTitle('Delphinium SelfBot: Utilities')
            embed.setColor(settings.embedcolor)
            embed.setThumbnail(`https://cdn.discordapp.com/icons/757714744756011179/e368c0feb85793793a26b9e9397d3a09.jpg`)
            embed.setDescription('```' + `${prefix}fry <user> -- Deepfries users pfp\n${prefix}repeat <time> <message> / <off> -- Repeats message for given time${prefix}lyrics <song> -- Gets song lyrics\n${prefix}snipe -- Snipes most recent deleted message\n${prefix}prefix -- Changes prefix\n${prefix}afk <text/off> -- Auto responds to dms with text\n${prefix}serverinfo -- Shows server info\n${prefix}avatar <user> -- Gives a user's avatar\n${prefix}hentai-bomb <user/off> -- Hentai Bombs users dms\n${prefix}uptime -- Shows bots uptime\n${prefix}search-anime <text> -- Searches 4anime.to for given anime\n${prefix}calc <expression> -- Calculates given expression\n${prefix}email <toggle/generate/remove> -- Toggles email snipes for Roblox, Generates or Deletes\n${prefix}logger <on/off> -- Message logger\n${prefix}giveaway-snipe <on/off> -- Giveaway sniper\n${prefix}nitro-snipe <on/off> -- Nitro sniper` + '```')
            embed.setFooter('We hope you enjoy the bot! - Delphinium Dev Team')

            msg.channel.send(embed).then(() => {msg.delete()})
        }

        if(args[0].toUpperCase() == 'USER') {
            let embed = new Discord.RichEmbed()
            embed.setTitle('Delphinium SelfBot: User')
            embed.setColor(settings.embedcolor)
            embed.setThumbnail(`https://cdn.discordapp.com/icons/757714744756011179/e368c0feb85793793a26b9e9397d3a09.jpg`)
            embed.setDescription('```' + `${prefix}trickcord-snipe <on/off> -- Trickcord Sniper\n${prefix}anigame-snipe <on/off> -- Anigame Sniper\n${prefix}minesweeper -- Makes a 10x10 minesweeper\n${prefix}crashme -- Has to be on client, resets your token and crashes discord\n${prefix}slotbot-snipe <on/off> -- Slotbot sniper\n${prefix}owoify <on/off> -- OwOifies messages\n${prefix}autofarm-tacoshack <on/off> -- Autofarms tacoshack bot\n${prefix}autofarm-mee6 <on/off> -- Autofarms mee6\n${prefix}hypesquad <bravery/brilliance/balance> -- Changes hypesquad house\n${prefix}playing <text> -- Sets status\n${prefix}watching <text> -- Sets status\n${prefix}listenting -- Sets status\n${prefix}streaming -- Sets status\n${prefix}steal-pfp <user> -- Steals users pfp\n${prefix}eval <code> -- Evals code\n${prefix}embedcolor <text> -- Sets your embed color\n${prefix}self-purge <1-100> -- Purges your messages` + '```')
            embed.setFooter('We hope you enjoy the bot! - Delphinium Dev Team')

            msg.channel.send(embed).then(() => {msg.delete()})
        }

        if(args[0].toUpperCase() == 'NSFW') {
            let embed = new Discord.RichEmbed()
            embed.setTitle('Delphinium SelfBot: Nsfw')
            embed.setColor(settings.embedcolor)
            embed.setThumbnail(`https://cdn.discordapp.com/icons/757714744756011179/e368c0feb85793793a26b9e9397d3a09.jpg`)
            embed.setDescription('```' + `${prefix}ass -- Shows some ass\n${prefix}porn -- Shows some porn\n${prefix}anime-thighs -- Shows anime thighs\n${prefix}anime-ass -- Shows anime ass\n${prefix}anime-panties -- Shows anime panties\n${prefix}suck <user> -- Suck off user\n${prefix}rsuck <user> Suck but you receive\n${prefix}fuck <user> -- Fucks user\n${prefix}rfuck <user> -- Fuck but receive\n${prefix}nsfwavatar -- Gives an nsfw avatar\n${prefix}yuri -- Shows yuri (lesbian hentai)\n${prefix}trap -- Shows traps\n${prefix}hentai -- Shows hentai\n${prefix}solo -- More hentai` + '```')
            embed.setFooter('We hope you enjoy the bot! - Delphinium Dev Team')

            msg.channel.send(embed).then(() => {msg.delete()})
        }

        if(args[0].toUpperCase() == 'ANIME') {
            let embed = new Discord.RichEmbed()
            embed.setTitle('Delphinium SelfBot: Anime')
            embed.setColor(settings.embedcolor)
            embed.setThumbnail(`https://cdn.discordapp.com/icons/757714744756011179/e368c0feb85793793a26b9e9397d3a09.jpg`)
            embed.setDescription('```' + `${prefix}cuddle <user> -- Cuddles user\n${prefix}suicide -- You die\n${prefix}kiss <user> -- Kisses user\n${prefix}hug <user> -- Hugs user\n${prefix}pout -- You pout?\n${prefix}hmph -- Fed up/annoyed\n${prefix}pat <user> -- Pats user\n${prefix}neko -- Gives a neko\n${prefix}foxgirl -- Gives a fox girl\n${prefix}feed <user> -- Feeds user\n${prefix}slap <user> -- Slaps user\n${prefix}smug -- Displays smugness\n${prefix}baka <user> -- Anime rage at user\n${prefix}poke <user> -- Pokes user\n${prefix}waifu <user> -- Shows users waifu (random)` + '```')
            embed.setFooter('We hope you enjoy the bot! - Delphinium Dev Team')

            msg.channel.send(embed).then(() => {msg.delete()})
        }

        if(args[0].toUpperCase() == 'MISC') {
            let embed = new Discord.RichEmbed()
            embed.setTitle('Delphinium SelfBot: Miscellaneous')
            embed.setColor(settings.embedcolor)
            embed.setThumbnail(`https://cdn.discordapp.com/icons/757714744756011179/e368c0feb85793793a26b9e9397d3a09.jpg`)
            embed.setDescription('```' + `${prefix}invites <user> -- Shows how many invites a user has\n${prefix}8ball -- 8ball\n${prefix}meme -- Gives a meme\n${prefix}dog -- Gives a picture of a dog\n${prefix}cat -- Gives a picture of a cat\n${prefix}define <text> -- Defines given text\n${prefix}urban <text> -- Defines with urban dictionary\n${prefix}gray <file:image> -- Grays the image\n${prefix}halftoken <user> -- Shows half the users token\n${prefix}roblox <user> -- Roblox details on user\n${prefix}ascii <text> -- Converts text to ascii\n${prefix}fancy <text> -- Converts text to fancy font\n${prefix}bold <text> -- Converts text to bold font\n${prefix}speak <text> -- Text to speech with file\n${prefix}uinfo <user> -- Gives userinfo on member\n${prefix}copydiscord -- Copies discord\n${prefix}embed <text> -- Embeds text\n${prefix}pp <user> -- Shows users pp size\n${prefix}randomnum <min> <max> -- Random number)\n${prefix}servroles -- Displays server roles\n${prefix}contactme -- Displays given contact info` + '```')
            embed.setFooter('We hope you enjoy the bot! - Delphinium Dev Team')

            msg.channel.send(embed).then(() => {msg.delete()})
        }

	}
}

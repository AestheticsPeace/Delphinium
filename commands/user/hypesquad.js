const Discord = require("discord.js");
const settings = require("./../../settings.json")
const request = require("request");

module.exports = {
	name: 'hypesquad',
	async execute(msg, args) {
        
        if(args[0].toUpperCase() == 'BRAVERY') {
            var options = {
                'method': 'POST',
                'url': 'https://discordapp.com/api/v6/hypesquad/online',
                'headers': {
                    'authorization': settings.token,
                },
                body: JSON.stringify({
                    "house_id": 1
                })
    
            };
            request(options, function (error, response) {
                if (error) throw new Error(error);
                console.log(response.body);
            });
            let embed = new Discord.RichEmbed()
            embed.setThumbnail(`https://vignette.wikia.nocookie.net/hypesquad/images/4/41/BraveryLogo.png/revision/latest?cb=20180825044200`)
            embed.setColor(settings.embedcolor)
            embed.setTitle(`House Changed`)
            embed.setDescription(`**New House: Bravery**`)
            embed.setFooter(`7s Cooldown`)
            msg.channel.send(embed).then(() => {
                msg.delete()
            })
        }
        if(args[0].toUpperCase() == 'BRILLIANCE') {
            var options = {
                'method': 'POST',
                'url': 'https://discordapp.com/api/v6/hypesquad/online',
                'headers': {
                    'authorization': settings.token,
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    "house_id": 2
                })
    
            };
            request(options, function (error, response) {
                if (error) throw new Error(error);
                console.log(response.body);
            });
            let embed = new Discord.RichEmbed()
            embed.setThumbnail(`https://vignette.wikia.nocookie.net/hypesquad/images/8/8f/BrillianceLogo.png/revision/latest/scale-to-width-down/340?cb=20180825045035`)
            embed.setColor(settings.embedcolor)
            embed.setTitle(`House Changed`)
            embed.setDescription(`**New House: Briliance**`)
            embed.setFooter(`7s Cooldown`)
            msg.channel.send(embed).then(() => {
                msg.delete()
            })
        }
        if(args[0].toUpperCase() == 'BALANCE') {
            var options = {
                'method': 'POST',
                'url': 'https://discordapp.com/api/v6/hypesquad/online',
                'headers': {
                    'authorization': settings.token,
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    "house_id": 3
                })
    
            };
            request(options, function (error, response) {
                if (error) throw new Error(error);
                console.log(response.body);
            });
            let embed = new Discord.RichEmbed()
            embed.setThumbnail(`https://aesthetics-peace.s-ul.eu/S7RuLi2WwPf5Yg8C`)
            embed.setColor(settings.embedcolor)
            embed.setTitle(`House Changed`)
            embed.setDescription(`**New House: Balance**`)
            embed.setFooter(`7s Cooldown`)
            msg.channel.send(embed).then(() => {
                msg.delete()
            })
        }
	}
}
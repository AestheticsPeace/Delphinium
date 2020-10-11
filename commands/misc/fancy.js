const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'fancy',
	async execute(msg, args) {

        function applyCharMap(map, text) {
            let out = "";
            for (let c of text.split("")) {
                if (map[c] !== undefined) out += map[c];
                else if (map[c.toLowerCase()] !== undefined) out += map[c.toLowerCase()];
                else out += c;
            }
            return out;
        }
        
        const CharMap = {
            "0": "0",
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            "a": "𝓪",
            "b": "𝓫",
            "c": "𝓬",
            "d": "𝓭",
            "e": "𝓮",
            "f": "𝓯",
            "g": "𝓰",
            "h": "𝓱",
            "i": "𝓲",
            "j": "𝓳",
            "k": "𝓴",
            "l": "𝓵",
            "m": "𝓶",
            "n": "𝓷",
            "o": "𝓸",
            "p": "𝓹",
            "q": "𝓺",
            "r": "𝓻",
            "s": "𝓼",
            "t": "𝓽",
            "u": "𝓾",
            "v": "𝓿",
            "w": "𝔀",
            "x": "𝔁",
            "y": "𝔂",
            "z": "𝔃",
            "A": "𝓐",
            "B": "𝓑",
            "C": "𝓒",
            "D": "𝓓",
            "E": "𝓔",
            "F": "𝓕",
            "G": "𝓖",
            "H": "𝓗",
            "I": "𝓘",
            "J": "𝓙",
            "K": "𝓚",
            "L": "𝓛",
            "M": "𝓜",
            "N": "𝓝",
            "O": "𝓞",
            "P": "𝓟",
            "Q": "𝓠",
            "R": "𝓡",
            "S": "𝓢",
            "T": "𝓣",
            "U": "𝓤",
            "V": "𝓥",
            "W": "𝓦",
            "X": "𝓧",
            "Y": "𝓨",
            "Z": "𝓩"
        };
        let embed = new Discord.RichEmbed()
        embed.setColor(settings.embedcolor)
        .setTitle(`Converted Text: Fancy`)
        .setDescription("```" + applyCharMap(CharMap, args.join(" ")) + "```")

            msg.channel.send(embed).then(() => {
                msg.delete()
        })
	}
}
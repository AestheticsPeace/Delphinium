const Discord = require("discord.js");
const settings = require("./../../settings.json");

module.exports = {
	name: 'bold',
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
                "0": "𝟎",
                "1": "𝟏",
                "2": "𝟐",
                "3": "𝟑",
                "4": "𝟒",
                "5": "𝟓",
                "6": "𝟔",
                "7": "𝟕",
                "8": "𝟖",
                "9": "𝟗",
                "a": "𝐚",
                "b": "𝐛",
                "c": "𝐜",
                "d": "𝐝",
                "e": "𝐞",
                "f": "𝐟",
                "g": "𝐠",
                "h": "𝐡",
                "i": "𝐢",
                "j": "𝐣",
                "k": "𝐤",
                "l": "𝐥",
                "m": "𝐦",
                "n": "𝐧",
                "o": "𝐨",
                "p": "𝐩",
                "q": "𝐪",
                "r": "𝐫",
                "s": "𝐬",
                "t": "𝐭",
                "u": "𝐮",
                "v": "𝐯",
                "w": "𝐰",
                "x": "𝐱",
                "y": "𝐲",
                "z": "𝐳",
                "A": "𝐀",
                "B": "𝐁",
                "C": "𝐂",
                "D": "𝐃",
                "E": "𝐄",
                "F": "𝐅",
                "G": "𝐆",
                "H": "𝐇",
                "I": "𝐈",
                "J": "𝐉",
                "K": "𝐊",
                "L": "𝐋",
                "M": "𝐌",
                "N": "𝐍",
                "O": "𝐎",
                "P": "𝐏",
                "Q": "𝐐",
                "R": "𝐑",
                "S": "𝐒",
                "T": "𝐓",
                "U": "𝐔",
                "V": "𝐕",
                "W": "𝐖",
                "X": "𝐗",
                "Y": "𝐘",
                "Z": "𝐙"
            };
            let embed = new Discord.RichEmbed()
            embed.setColor(settings.embedcolor)
            .setTitle(`Converted Text: Bold`)
            .setDescription("```" + applyCharMap(CharMap, args.join(" ")) + "```")

            msg.channel.send(embed).then(() => {
                msg.delete()
        })
	}
}
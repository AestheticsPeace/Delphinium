const MiniSweeper = require("minisweeper");
const Discord = require("discord.js");
const settings = require("./../../settings.json")

module.exports = {
	name: 'minesweeper',
	async execute(msg, args) {

		let grid = MiniSweeper.createGrid(10, 10);
        grid = MiniSweeper.addMine(12, grid);

        let emoji_group = {
            "0": "||:zero:||",
            "1": "||:one:||",
            "2": "||:two:||",
            "3": "||:three:||",
            "4": "||:four:||",
            "5": "||:five:||",
            "6": "||:six:||",
            "7": "||:seven:||",
            "8": "||:eight:||",
            "-1": "||:boom:||"
        }
        grid = MiniSweeper.replaceMine(emoji_group, grid);

        await msg.channel.send(grid).then(() => {msg.delete()})
	}
}
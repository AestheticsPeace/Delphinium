module.exports = (msg) => {
    if (msg.author.bot || !msg.guild) return
    msg.client.delMsg.set(`${msg.guild.id}_${msg.channel.id}`, msg)
}
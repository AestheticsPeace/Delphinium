const figlet = require("figlet");

module.exports = async (client) => {

    let mesg = "Delphinium"

    figlet(mesg, async (err, ascii) => {
        if (err) {
            return;
        }
        console.log(ascii)
            await console.log(`✿ ${client.user.tag} Logged In, Welcome to Delphinium ✿\nCreated By: Peace#9400, Ayano#0002, Weismann#8896`)
    })
}
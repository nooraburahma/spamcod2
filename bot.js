const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("561960865335869478")
setInterval(function() {
channel.send(`spam spam spam spam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("590208611028828170")
setInterval(function() {
channel.send(`الحشيش تمام`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

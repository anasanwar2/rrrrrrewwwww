const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("643869087172132884")
setInterval(function() {
channel.send(`hi iam anas i love you very much tank you for listen hi iam anas i love you very much tank you for listen hi iam anas i love you very much tank you for listen hi iam anas i love you very much tank you for listen hi iam anas i love you very much tank you for listen hi iam anas i love you very much tank you for listen hi iam anas i love you very much tank you for listen hi iam anas i love you very much tank you for listen hi iam anas i love you very much tank you for listen hi iam anas i love you very much tank you for listen hi iam anas i love you very much tank you for listen hi iam anas i love you very much tank you for listen`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
const Discord = require("discord.js");

const client = new Discord.Client();
const token = '';

client.on('ready', ()=>{
    console.log('bot is online');
})



let fs = require("fs");
let text = fs.readFileSync("./BadWords.txt").toString('utf-8')
let set = text.split("\n")

client.on('message', msg =>{
    let message = msg.content.toUpperCase()
    console.log(message)
    let wordArray = message.split(" ")

    for (var i = 0; i < wordArray.length; i++) {
        if(set.includes(wordArray[i])) {
            msg.delete()
            msg.reply('Not in my Christian server')
            break
        }
    }
    
})

client.login(token)
const Discord = require('discord.js');

var hd = [
    "",
    
];

module.exports.run = async (bot, message, args) => {

  message.channel.send ( "Ж" + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tag',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'tag'
};
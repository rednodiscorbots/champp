const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../package.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
let msg = message
  if(!message.member.roles.has('683529392097460239')) return message.reply('İsim değiştirmek için yetkiniz yok.')
  let isim = args.slice(1).join(' ');
  let kullanici = message.mentions.users.first();
  if(!kullanici) return message.reply(`:warning: Lütfen bir kullanıcı giriniz! \nDoğru Kullanım; \`r?isim @${client.user.username}#${client.user.discriminator} <yeni isim>\``)
  if(!isim) return message.reply(`:warning: Lütfen bir kullanıcı adı giriniz! \nDoğru Kullanım; \`r?isim @${client.user.username}#${client.user.discriminator} <yeni isim>\``)
  if(isim.length > 32) return message.reply(`:warning: Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz!`)
  message.guild.members.get(kullanici.id).setNickname(` ${isim}`)
  message.channel.send(`\`${kullanici.username}\` adlı kişinin kullanıcı adı \`${isim}\` olarak başarıyla değiştirildi. :ballot_box_with_check: `)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['takmaad'],
    permLevel: 0
}

exports.help = {
    name: 'isim',
    description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
    usage: 'isim @kullanıcı <kullanıcı adı>'
  };
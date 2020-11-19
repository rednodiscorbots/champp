const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için \`Üyeleri At\` yetkisine sahip olmalısın.`);
      
   if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor('0x00AE86')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription('🔥 Üzgünüm, bunu yapamazsınız!')
  return message.author.sendEmbed(ozelmesajuyari); }  
  let guild = message.guild;
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  let modlog = guild.channels.find('name', 'ж│uyarı-ban');
  if (!modlog) return message.reply('ж│uyarı-ban` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('**Lütfen tüm bilgileri eksiksiz doldur,örnek r!uyar @kullanıcı#1234 Kural İhlali**');
  if (message.mentions.users.size < 1) return message.reply('**Lütfen tüm bilgileri eksiksiz doldur,örnek r!uyar @kullanıcı#1234 Kural İhlali**').catch(console.error);
    if (!message.guild.member(user).kickable) return message.reply('Yetkilileri uyaramam!');
  message.channel.send("**Kullanıcı başarıyla uyarıldı!**");
  const embed = new Discord.RichEmbed()
  .setColor('0x00AE86')
  .setTimestamp()
  .setDescription('Kural ihlali gerekçesi nedeni ile uyarıldınız!')
  .addField('Eylem:', 'Uyarma :loud_sound:')
  .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
  .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
  message.channel.send('Kişi, başarılı bir şekilde uyarıldı!');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uyar','uyarı', 'warn'],
  permlevel: 0
};

exports.help = {
  name: 'uyarı',
  description: 'Belirtilen kullanıcıyı uyarır',
  usage: 'uyarı <@kullanıcı> <sebep>'
};  
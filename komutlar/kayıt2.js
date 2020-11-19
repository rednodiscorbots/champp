const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
  let msg = message

  if(!message.member.roles.has('683529392097460239')) return message.reply('Kayıt için yetkiniz yok!')


    let kayıt = msg.mentions.members.first() || msg.guild.members.get(args[0]);
    if (!kayıt) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("🔗 Kayıt için birini etiketlemelisin!")
        }
    })

    let role = msg.guild.roles.find(r => r.name === "Lenusy");
    if (!role) {
        try {
            role = await msg.guild.Role({
            });

            msg.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    
                });
            });
        } catch (e) {
            console.log(e.stack);
        }

    }

    if (kayıt.roles.has(role.id)) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: (" 💡 Zaten önceden kayıt olmuşsun! ")
        }
    });

    await kayıt.addRole(role).catch()
    await kayıt.removeRole('666942752105431050').catch()
    msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("🔓 Tebrikler kayıt oldunuz. Sunucu kurallarını okumayı unutmayınız, sunucuda iyi eğlenceler.")
        }
    })
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'k',
    description: 'Sunucuya kayıt olursunuz!',
    usage: 'k'
};
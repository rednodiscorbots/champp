const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
  let msg = message

  if(!message.member.roles.has('772013254021087244')) return message.reply('Cezadan çıkarmak için yetkiniz yok!')


    let kayıt = msg.mentions.members.first() || msg.guild.members.get(args[0]);
    if (!kayıt) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("🔗 Karantinadan çıkarmak için birini etiketlemelisin!")
        }
    })

    let role = msg.guild.roles.find(r => r.name === "Daimon");
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
            description: ("Zaten önceden karantinadan çıkarılmışsınız! ")
        }
    });

    await kayıt.addRole(role).catch()
    await kayıt.removeRole('772008575392284672').catch()
    msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("Karantinadan çıktınız. Sunucu kurallarını okumayı unutmayınız, sunucuda iyi eğlenceler.")
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
    name: 'e-çıkar',
    description: 'Sunucuya kayıt olursunuz!',
    usage: 'e-çıkar'
};
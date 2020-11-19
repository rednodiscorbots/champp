const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
  let msg = message

  if(!message.member.roles.has('772013254021087244')) return message.reply('Ceza için yetkiniz yok!')


    let kayıt = msg.mentions.members.first() || msg.guild.members.get(args[0]);
    if (!kayıt) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("🔗 Karantina için birini etiketlemelisin!")
        }
    })

    let role = msg.guild.roles.find(r => r.name === "Karantina");
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
            description: ("Zaten karantinada ")
        }
    });

    await kayıt.addRole(role).catch()
    await kayıt.removeRole('667009749224521761').catch()
    await kayıt.removeRole('667009962588766258').catch()
await kayıt.removeRole('667126868419411992').catch()
await kayıt.removeRole('667126866058018817').catch()
await kayıt.removeRole('666942752105431050').catch()
    msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("Karantinaya alınmıştır.")

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
    name: 'karantina',
    description: 'Karantina',
    usage: 'karantina'
};
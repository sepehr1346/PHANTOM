const botconfig = require("./botconfig.json")
const colors = require("./colors.json")
const discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const embedPageMaker = require("discordjs-embedpage-maker");

const {prefix, token} = require("./botconfig.json")


const bot = new discord.Client({disableEveryone: true})

//ready bot

bot.on('ready', () => {
  console.log(`${bot.user.tag} bot start`)
  bot.user.setActivity("PHANTOM RP | p!help" , {
    type: "WATCHING"
  })

  //message start it now
  
  bot.on('message', message => {
    if (message.content === `${prefix}discord link`) {
      message.channel.send('**Link Server Discord PHANTOMRP** https://discord.gg/HMNHBJ4KVa');
    } else if (message.content === `${prefix}discord link DM`) {
      message.author.send('**Link Server Discord PHANTOMRP** https://discord.gg/HMNHBJ4KVa');
    }
    if (message.content === `${prefix}ip server`) {
      message.channel.send('**IP Server FiveM Server PHANTOMRP ((connect 185.231.112.179))**');
    } else if (message.content === `${prefix}ip server DM`) {
      message.author.send('**Ip Server FiveM Server PHANTOMRP ((connect 185.231.112.179))**');
    }
    if (message.content === `${prefix}rcheck`) {
      message.channel.send('<a:c584b3988cdd4fe39d89a46d073da12a:737973854407753759>');
    } else if (message.content === `${prefix}beep`) {
      message.channel.send('Boop.');
    }
    if (message.content === `1`) {
      message.channel.send(`2`);
    } else if (message.content === `${prefix}beep`) {
      message.channel.send('Boop.');
    }
    if (message.content === `${prefix}ping`) {
      message.channel.send('Pong.');
    } else if (message.content === `${prefix}beep`) {
      message.channel.send('Boop.');
    }
    else if (message.content === `${prefix}user-info`) {
      message.channel.send(`> Your username: ${message.author.username}\n> Your ID: ${message.author.id}\n> Your tag: ${message.author.tag}\n> Your icon:${message.author.displayAvatarURL()}`);
    }
    else if (message.content === `${prefix}server-info`) {
      message.channel.send(`Server Name: ${message.guild.name}\nserver ID: ${message.guild.id}\nServer Icon: ${message.guild.iconURL()}`);
    }
    if (message.content === `سلام`) {
      message.reply(`خوبی زیبا`)
    }
    if (message.content === `اوکی`) {
      message.reply(`حله`)
    }
    if (message.content === `ok`) {
      message.reply(`حله`)
    }
    if (message.content === `salam`) {
      message.reply(`خوبی زیبا`)
    }
    if (message.content === `slm`) {
      message.reply(`خوبی زیبا`)
    }
    if (message.content === `salm`) {
      message.reply(`خوبی زیبا`)
    }
    if (message.content === `slam`) {
      message.reply(`خوبی زیبا`)
    }
    if (message.content === `are`) {
      message.reply(`به کیرم`)
    }
    if (message.content === `اره`) {
      message.reply(`به کیرم`)
    }
    

  //Help Commend Embed

    if (message.content === `${prefix}help`) {
      let helpEmbed = new MessageEmbed()
      .setColor(colors.black)
      .setTitle(`<:0022:778615496392048641> Help Pannel`)
      .setDescription(`<a:111111111111111:757182700716163112> prefix:p!`)
      .addFields(
        { name: `<a:11:756922545604788264> discord link`, value: `ersal link discord server phantom` },
        { name: `<a:11:756922545604788264> ip server`, value: `ersal ip server phantom role play` },
        { name: `<a:11:756922545604788264> userinfo`, value: `ersal info hesab shoma` },
        { name: `<a:11:756922545604788264> serverinfo`, value: `ersal info server phantom` },
      )
      .setThumbnail('https://cdn.discordapp.com/icons/733627521123483658/a_4ca8a1f4b79e5f8e2432b7c762c2be33.gif?size=4096')
      .setFooter(`${message.author.username}`, message.author.avatarURL())
      message.channel.send(helpEmbed);
    }
    
    
    if (message.content === `${prefix}Help`) {
      let HelpEmbed = new MessageEmbed()
      .setColor(colors.black)
      .setTitle(`<:0022:778615496392048641> Help Pannel`)
      .setDescription(`<a:111111111111111:757182700716163112> prefix:p!`)
      .addFields(
        { name: `<a:11:756922545604788264> discord link`, value: `ersal link discord server phantom` },
        { name: `<a:11:756922545604788264> ip server`, value: `ersal ip server phantom role play` },
        { name: `<a:11:756922545604788264> userinfo`, value: `ersal info hesab shoma` },
        { name: `<a:11:756922545604788264> serverinfo`, value: `ersal info server phantom` },
      )
      .setThumbnail('https://cdn.discordapp.com/icons/733627521123483658/a_4ca8a1f4b79e5f8e2432b7c762c2be33.gif?size=4096')
      .setFooter(`${message.author.username}`, message.author.avatarURL())
      message.channel.send(HelpEmbed);
    
}

//Embed Message

if (message.content === `${prefix}start`) {
  let embedPage = new embedPageMaker(bot)
embedPage
.setColor("RED")
.setTitleData("سرور استارت")
.setTitle(`<a:0025:779600589842546688> Announce`)
.setFooterData(`Commend create by ${message.author.username}`, message.author.avatarURL())
.setData([`server Drakness Run Shod Bepachid too\n ip server ((185.231.112.179:30120))`])
.setThumbnail(`https://cdn.discordapp.com/icons/733627521123483658/a_5f799775a01b762e3e80f7adb4dbf6da.gif?size=4096`)
.run(message);
}
if (message.content === `${prefix}userinfo`) {
  let embedPage = new embedPageMaker(bot)
  embedPage
  .setColor(colors.black)
  .setTitleData("یوزر")
  .setTitle(`<:0026:779927372697829417> User Info`)
  .setFooterData(`Commend create by ${message.author.username}`, message.author.avatarURL())
  .setData([`Your username: ${message.author.username}\nYour ID: ${message.author.id}\nYour tag: ${message.author.tag}\nYour acc Create: ${message.author.createdAt.toLocaleString()}`])
  .setImage(`${message.author.avatarURL({ format: `jpeg`, dynamic: true, size: 1024 })}`)
  .run(message)
}
if (message.content === `${prefix}serverinfo`) {
  let embedPage = new embedPageMaker(bot)
  embedPage
  .setColor(colors.black)
  .setTitleData("سرور")
  .setTitle(`<:0027:779927373557792808> Server Info`)
  .setFooterData(`Commend create by ${message.author.username}`, message.author.avatarURL())
  .setData([`Server name: ${message.guild.name}\nServer ID: ${message.guild.id}\nServer owner: ${message.guild.owner}\nServer reigen: ${message.guild.region}\nServer count: ${message.guild.memberCount}\Server create: ${message.guild.createdAt.toLocaleString()}`])
  .setImage(`${message.guild.iconURL({ format: `jpeg`, dynamic: true, size: 1024})}`)
  .run(message)
}
if (message.content === `${prefix}invite`) {
  let inviteEmbed = new MessageEmbed()
  .setColor(colors.black)
  .setTitle(`invite bot be server khodeton`)
	.setURL(`https://discord.com/oauth2/authorize?client_id=755007639670489088&scope=bot&permissions=2147482873`)
  .setAuthor(`Invite Pannel`)
  .setFooter(`${message.author.username}`, message.author.avatarURL())
  .setThumbnail(`https://cdn.discordapp.com/icons/733627521123483658/a_4ca8a1f4b79e5f8e2432b7c762c2be33.gif?size=4096`)
  message.channel.send(inviteEmbed)
}
  
  });
  })

//token

bot.login(token)

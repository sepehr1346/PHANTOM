const botconfig = require("./botconfig.json")
const colors = require("./colors.json")
const discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const embedPageMaker = require("discordjs-embedpage-maker");

const {prefix, token} = require("./botconfig.json")


//client = bot

const bot = new discord.Client({disableEveryone: true})

//ready bot

bot.on("ready", () => {
  console.log(`${bot.user.tag} online`)
  bot.user.setStatus(`idle`)
  const guild = bot.guilds.cache.get("733627521123483658");
  let status_num = 0
  setInterval(function () {
    if (status_num == 0) {
      bot.user.setActivity(`${guild.memberCount} Member`, { type: "WATCHING" })
      status_num += 1;
    }
    else if (status_num === 1) {
      bot.user.setActivity(`${prefix}help`, { type: "LISTENING" });
      status_num++;
    }
    else if (status_num === 2) {
      bot.user.setActivity(`Phantom Role Play`, { type: "PLAYING" });
      status_num++;
    }
    else if (status_num === 3) {
      bot.user.setActivity(`https://discord.gg/HMNHBJ4KVa`, { type: "PLAYING" });
      status_num++;
    }
    else{
      bot.user.setActivity(`Dev Sepehr`, { type: "LISTENING" });
      status_num = 0;
    }
  }, 3000);


  bot.on('uncaughtException', (err) => {
    console.log("Uncaught Exception: " + err)
    process.exit(1)
});

  //message start it now
  
  bot.on('message', message => {
    if (message.author.bot) return;
    if (message.content === `${prefix}developer`) {
      message.channel.send(`<@733629799469416479>`)
    }
    if (message.content === `${prefix}discord link`) {
      message.channel.send('**Link Server Discord PHANTOM RP** https://discord.gg/HMNHBJ4KVa');
    } else if (message.content === `${prefix}discord link DM`) {
      message.author.send('**Link Server Discord PHANTOM RP** https://discord.gg/HMNHBJ4KVa');
    }
    if (message.content === `${prefix}ip server`) {
      message.channel.send('**IP Server FiveM Server PHANTOM RP ((connect 185.231.112.179))**');
    } else if (message.content === `${prefix}ip server DM`) {
      message.author.send('**Ip Server FiveM Server PHANTOM RP ((connect 185.231.112.179))**');
    }
    if (message.content === `${prefix}rcheck`) {
      message.channel.send('<a:c584b3988cdd4fe39d89a46d073da12a:737973854407753759>');
    } else if (message.content === `role`) {
      message.channel.send(`<a:c584b3988cdd4fe39d89a46d073da12a:737973854407753759>`);
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

    //Fun Commend

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
    
    


  //Commend Handler
  

    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'give') {
		message.reply('Role Dade Shod <a:c584b3988cdd4fe39d89a46d073da12a:737973854407753759>');
  } 
  if (command === 'role') {
		message.reply('Role Dade Shod <a:c584b3988cdd4fe39d89a46d073da12a:737973854407753759>');
  }
  if (command === 'a') {
    bot.channels.cache.get(``).send('@everyone ')
  }
  

  //Help Commend Embed

    if (command === `help`) {
      let helpEmbed = new MessageEmbed()
      .setColor(colors.black)
      .setTitle(`Help Pannel`)
      .setDescription(`<a:111111111111111:757182700716163112> prefix:p!`)
      .addFields(
        { name: ` discord link`, value: `ersal link discord server phantom` },
        { name: ` ip server`, value: `ersal ip server phantom role play` },
        { name: ` userinfo`, value: `ersal info hesab shoma` },
        { name: ` serverinfo`, value: `ersal info server phantom` },
        { name: `staf`, value: `staf server phantom` },
        { name: ` support`, value: `support bot phantom`},
        { name: ` invite`, value: `link invite bot phantom`},
      )
      .setThumbnail('https://cdn.discordapp.com/icons/733627521123483658/a_4ca8a1f4b79e5f8e2432b7c762c2be33.gif?size=4096')
      .setFooter(`request by ${message.author.username}`, message.author.avatarURL())
      message.channel.send(helpEmbed);
    }
    
    
    if (command === `Help`) {
      let HelpEmbed = new MessageEmbed()
      .setColor(colors.black)
      .setTitle(`Help Pannel`)
      .setDescription(`<a:111111111111111:757182700716163112> prefix:p!`)
      .addFields(
        { name: ` discord link`, value: `ersal link discord server phantom` },
        { name: ` ip server`, value: `ersal ip server phantom role play` },
        { name: ` userinfo`, value: `ersal info hesab shoma` },
        { name: ` serverinfo`, value: `ersal info server phantom` },
        { name: `staf`, value: `staf server phantom` },
        { name: ` support`, value: `support bot phantom`},
        { name: ` invite`, value: `link invite bot phantom`},
      )
      .setThumbnail('https://cdn.discordapp.com/icons/733627521123483658/a_4ca8a1f4b79e5f8e2432b7c762c2be33.gif?size=4096')
      .setFooter(`request by ${message.author.username}`, message.author.avatarURL())
      message.channel.send(HelpEmbed);
    
}

//Embed Message


if (message.content === `${prefix}userinfo`) {
  let UserEmbed = new MessageEmbed()
  .setColor(colors.black)
  .setTitle(`User Info`)
  .setFooter(`request by ${message.author.username}`, message.author.avatarURL())
  .setDescription(`Your username: ${message.author.username}\nYour ID: ${message.author.id}\nYour tag: ${message.author.tag}\nYour acc Create: ${message.author.createdAt.toLocaleString()}`)
  .setImage(`${message.author.avatarURL({ format: `jpeg`, dynamic: true, size: 1024 })}`)
  message.channel.send(UserEmbed)
}

if (message.content === `${prefix}serverinfo`) {
  let ServerEmbed = new MessageEmbed()
  .setColor(colors.black)
  .setTitle(`Server Info`)
  .setFooter(`request by ${message.author.username}`, message.author.avatarURL())
  .setDescription(`Server name: ${message.guild.name}\nServer ID: ${message.guild.id}\nServer owner: ${message.guild.owner}\nServer reigen: ${message.guild.region}\nServer count: ${message.guild.memberCount}\nServer create: ${message.guild.createdAt.toLocaleString()}`)
  .setImage(`${message.guild.iconURL({ format: `jpeg`, dynamic: true, size: 1024})}`)
  message.channel.send(ServerEmbed)
}

if (message.content === `${prefix}invite`) {
  let inviteEmbed = new MessageEmbed()
  .setColor(colors.black)
  .setTitle(`invite bot be server khodeton`)
	.setURL(`https://discord.com/oauth2/authorize?client_id=755007639670489088&scope=bot&permissions=2147482873`)
  .setAuthor(`Invite Pannel`)
  .setFooter(`request by ${message.author.username}`, message.author.avatarURL())
  .setThumbnail(`https://cdn.discordapp.com/icons/733627521123483658/a_4ca8a1f4b79e5f8e2432b7c762c2be33.gif?size=4096`)
  message.channel.send(inviteEmbed)
}

if (message.content === `${prefix}support`) {
  let SupportEmbed = new MessageEmbed()
  .setColor(colors.black)
  .setTitle(`dar sort pish omadan mishkeli baraton roy in matn klick konid`)
  .setURL(`https://discord.gg/HMNHBJ4KVa`)
  .setAuthor(`Support Panel`)
  .setFooter(`request by ${message.author.username}`, message.author.avatarURL())
  .setThumbnail(`https://cdn.discordapp.com/icons/733627521123483658/a_4ca8a1f4b79e5f8e2432b7c762c2be33.gif?size=4096`)
  message.channel.send(SupportEmbed)
}

if (message.content === `${prefix}staf`) {
  let StafEmbed = new MessageEmbed()
  .setColor(colors.black)
  .setTitle(`Staf Pannel`) 
  .addFields(
  { name:`Founder`, value:`<@719089784425021441>,<@623978712018321448>`  },
  { name:`Owner`, value:`<@616414221705674774>`},
  { name:`CoOwner`, value:`<@481833466904707074>`},
  { name:`Developer`, value:`<@719089784425021441>,<@623788275945046018>`},
  { name:`BotDeveloper`, value:`<@733629799469416479>`},
  { name:`DiscordManager`, value:`<@762031014624231454>`},
  { name:`Manager`, value:`<@242618261856976898>`},
  
  )
  .setFooter(`request by ${message.author.username}`, message.author.avatarURL())
  .setThumbnail(`https://cdn.discordapp.com/icons/733627521123483658/a_4ca8a1f4b79e5f8e2432b7c762c2be33.gif?size=4096`)
  message.channel.send(StafEmbed)
}

if (message.content === `${prefix}run`) {
  let RunEmbed = new MessageEmbed()
  .setColor(colors.black)
  .setTitle(`Announce`)
  .setDescription(`سرور استارت شد \n\n در صورت نبودن سرور در لیست با آیپی سرور وارد شوید \n\n Ip Server: (connect 158.58.188.242)\n\n`)
  .setFooter(`Message by ${message.author.username}`, message.author.avatarURL())
  .setThumbnail(`https://cdn.discordapp.com/icons/733627521123483658/a_4ca8a1f4b79e5f8e2432b7c762c2be33.gif?size=4096`)
  bot.channels.cache.get(`737567185442046043`).send(RunEmbed)
}

if (message.content === `${prefix}ServerIpSendChannel`) {
  let IpEmbed = new MessageEmbed()
  .setColor(colors.black)
  .setTitle(`Ip Server`)
  .setDescription(`Press (F8) in Menu and write \n connect 158.58.188.242`)
  .setFooter(`Message by ${message.author.username}`, message.author.avatarURL())
  .setThumbnail(`https://cdn.discordapp.com/icons/733627521123483658/a_4ca8a1f4b79e5f8e2432b7c762c2be33.gif?size=4096`)
  bot.channels.cache.get(``).send(IpEmbed)
}
if (message.content === `${prefix}stafgive`) {
  let SGiveEmbed = new MessageEmbed()
  .setColor(colors.black)
  .setTitle(`Staff Recruitment`)
  .setDescription(`Server PhantomRP Staff Active mipazirad!\nbray azmon be id <@242618261856976898> pm dahid`)
  .setThumbnail(`https://cdn.discordapp.com/icons/733627521123483658/a_4ca8a1f4b79e5f8e2432b7c762c2be33.gif?size=4096`)
  .setImage(`https://cdn.discordapp.com/attachments/783977691195637780/792984548823793734/hossss.png`)
  .setFooter(`Message by ${message.author.username}`, message.author.avatarURL())
  bot.channels.cache.get(``).send(SGiveEmbed)
}

  });
  })

 //token

bot.login(token)


//END THIS BOT NOW 

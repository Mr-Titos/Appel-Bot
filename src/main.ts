import * as Discord from "discord.js";
import token from './.token.js';
const bot = new Discord.Client();


bot.on('ready', function () {
  console.log("Bot connected & ready");
  bot.guilds.cache.forEach(guild => {
    console.log(getMembersConnected(guild));
  });
});
 

bot.on('message', msg => {
});

function getMembersConnected(guild: Discord.Guild) : Discord.GuildMember[] {
   return guild.voiceStates.cache.map(vs => vs.member); 
}

bot.login(token);
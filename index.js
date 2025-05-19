// index.js
const { Client, GatewayIntentBits, Partials } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
  partials: [Partials.Channel]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.content === '!hello') {
    message.reply('Hey there! 👋 I\'m alive and working!');
  }
});

client.on('guildMemberAdd', (member) => {
  member.send(`Welcome to the server, ${member.user.username}! 🎉`);
});

// Login to Discord with your bot token
client.login('MTM3MzkxMTY3NzAyMzgxMzcyMw.GUzanc.u6S9NkjN0xKT5Y9OlGyxR5D25QsF7-t3N6pGAc'); 
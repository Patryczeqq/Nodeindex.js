const discord = require("discord.js");

module.exports = {
  name: "support",
  category: "info",
  description: "",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`**Oficjalny serwer support**`)
    .setDescription(`https://discord.gg/X5yP4wmdKz`)
    .setColor("RANDOM")
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}
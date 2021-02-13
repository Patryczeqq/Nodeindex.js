const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "moderation",
  aliases: ["propozycja"],
  run: (client, message, args) => {
    if (!args.length) {
      return message.channel.send("Wpisz tresc swojej propozycji!");
    }

    let channel = message.guild.channels.cache.find(x => x.name === "📋┇propozycje" || x.name === "📋┇propozycje");

    if (!channel) {
      return message.channel.send(":x: To nie jest ustawiony przez administratora kanał - #📋┇propozycje");
    }

    let embed = new MessageEmbed()
      .setAuthor("Propozycja od: " + message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setColor("RANDOM")
      .setDescription(args.join(" "))
      .setTimestamp();

    channel.send(embed).then(m => {
      m.react("✅");
      m.react("❌");
    });

    message.channel.send("Twoja propozycja została wysłana na ustawiony kanał przez administratora bota!:" + `${channel}`);
    
    message.delete()
    
  }
};

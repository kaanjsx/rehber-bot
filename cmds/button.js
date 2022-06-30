const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
name: "button",
async execute(client, message, args) {
    if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply({content: 'Yapamazsın', ephemeral: true});
    const embed = new MessageEmbed()
    .setColor("#2F3136")
    .setTitle(`<a:ghostt:940992751254765598> **${message.guild.name}**'ye hoşgeldiniz!`)
   .setDescription(`${message.guild.name}, \n Kodlayıcıların birbirlerinden yardım aldıkları, üyelerine her türlü destek veren altyapılar paylaşan topluluktur.`);
    let btn = new MessageButton()
    .setStyle("PRIMARY")
    .setLabel("Kuralları Oku")
    .setCustomId("kural")
    .setEmoji('991658803265282109');
    let btn1 = new MessageButton()
    .setStyle("SUCCESS")
    .setLabel("Başlangıç Turu")
    .setCustomId("tur")
    .setEmoji('991658486335287296');
    let btn2 = new MessageButton()
    .setStyle("SECONDARY")
    .setLabel("İstek Öneri")
    .setCustomId("suggest")
    .setEmoji('893156200840061008');
    let btn3 = new MessageButton()
    .setStyle("SECONDARY")
    .setLabel("Destek/Ticket")
    .setCustomId("support")
    .setEmoji('940992751254765598');
    const row = new MessageActionRow() 
    .addComponents([btn, btn1,btn2,btn3]);
    message.channel.send({components: [row], embeds: [embed] });
  }
}
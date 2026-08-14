require("dotenv").config();

const {
    Client,
    GatewayIntentBits,
    EmbedBuilder
} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

client.once("ready", () => {
    console.log(`✅ ${client.user.tag} está online.`);
});

client.on("guildMemberAdd", async (member) => {

    const canal = member.guild.channels.cache.get("1537966672839970836");

    if (!canal) return;

    const embed = new EmbedBuilder()
        .setColor("#2F80ED")
        .setTitle("🚚 ¡Bienvenido a ELITE EXPRESS!")
        .setDescription(
`## ¡Hola ${member}!

Nos alegra que formes parte de **ELITE EXPRESS**.

👥 **Miembros:** ${member.guild.memberCount}

📌 Leé las reglas y disfrutá de la comunidad.

💙 ¡Te deseamos una excelente estadía!`
        )
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setImage("https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200")
        .setFooter({
            text: "ELITE EXPRESS • Sistema de Bienvenida"
        })
        .setTimestamp();

    canal.send({
        content: `🎉 ¡Bienvenido ${member}!`,
        embeds: [embed]
    });

});

client.login(process.env.TOKEN);

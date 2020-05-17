let { ignoredChannel, trigger, response } = require("../config");

module.exports = async message => {
    if (message.author.bot) return;
    if (message.system) return;
    if (ignoredChannel.includes(message.channel)) return;

    const tagging = new RegExp("<(@(!|&|)|#|a{0,1}:\\w+:)\\d+>+", "g");
    let userMessage = message.content.replace(tagging, " ");

    if (trigger.some(r => userMessage.includes(r))) {
        message.channel.send(response[Math.floor(Math.random() * response.length)]);

        console.log(`${message.guild.name}#${message.channel.name}|${message.author.tag}: ${message.content}`);
    }
};
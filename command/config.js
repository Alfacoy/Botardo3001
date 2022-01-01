//COMANDOS
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

//DOTENV
require('dotenv').config()

// COMANDOS
function CreateCommands() {
    const commands = [
        new SlashCommandBuilder().setName('commands').setDescription('Shows all the commands avalible.'),
        new SlashCommandBuilder().setName('socials').setDescription('Shows social media links.'),
        new SlashCommandBuilder().setName('softwares').setDescription('Shows what softwares are used.')
    ].map(command => command.toJSON());

    const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

    rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.SERVER_ID), { body: commands })
        .then(() => console.log('Comandos de Discord registrados con éxito.'))
        .catch(console.error);
}

module.exports = {
    CreateCommands
}
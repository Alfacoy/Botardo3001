//DISCORD.JS
const { Client, Intents } = require('discord.js');
//DOTENV 
require('dotenv').config();
//COMMANDS
const { CreateCommands } = require('../command/config');
//ACTIONS
const {
    IsCommands,
    IsSocials,
    IsSoftwares
} = require('../command/index');

class DiscordBot {
    constructor() {
        this.client = new Client({ intents: [Intents.FLAGS.GUILDS] });
        //this.Commands();
        this.Watch();
    }

    //1
    Commands() {
        CreateCommands();
    }

    //2
    Watch() {
        this.client.once('ready', () => {
            console.log('Ready!!!');
        })

        this.client.on('interactionCreate', async interation => {
            if (!interation.isCommand()) return;

            const { commandName } = interation;

            switch (commandName) {
                case 'commands':
                    await interation.reply(IsCommands());
                    break;
                case 'socials':
                    break;
                case 'softwares':
                    break;
                default:
                    return
            }
        })

        this.client.login(process.env.TOKEN); 
    }

}

module.exports = DiscordBot;
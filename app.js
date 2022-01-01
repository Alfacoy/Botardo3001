const DiscordBot = require('./classes/discord');
const {Server} = require('./classes/server');

const app = new Server(3000)
const discord = new DiscordBot();

app.Listen();






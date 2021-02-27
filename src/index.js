const NostalgiaKiraClient = require('./Structures/NostalgiaKiraClient');
const config = require('../config.json');

const client = new NostalgiaKiraClient(config);
client.login();

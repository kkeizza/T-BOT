const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: path.join(__dirname, 'set.env') });
}

const config = {
    
    token: process.env.BOT_TOKEN || '',
    owner_id: process.env.OWNER_ID || "",
    prefix: process.env.PREFIX || ".",
    timezone: process.env.TIMEZONE || "Africa/Nairobi",
    greetNewMembers: {
        enabled: process.env.GREET_ENABLED !== 'false',
        gifUrl: process.env.GIF_URL || "https://files.catbox.moe/pm9x7c.gif"
    },
  
    antiLink: {
        enabled: process.env.ANTILINK !== 'false'
    },
    
    url: process.env.URL || "https://files.catbox.moe/c2v26s.jpg",
    sourceUrl: process.env.SOURCE_URL || "https://github.com/Keithkeizzah",
    ownerName: process.env.OWNER_NAME || 'Keith',
    botName: process.env.BOT_NAME || 'T-BOT'
};

const currentFile = require.resolve(__filename);
fs.watchFile(currentFile, () => {
    fs.unwatchFile(currentFile);
    console.log(`Updating ${path.basename(__filename)}`);
    delete require.cache[currentFile];
    require(currentFile);
});

module.exports = config;

const path = require('path');
const fs = require('fs');

function getConfig () {
    const configPath = path.resolve(process.cwd(), 'xmi.config.js');
    if (fs.existsSync(configPath)) {
        return require(configPath);
    }
    return {};
}

module.exports = getConfig;

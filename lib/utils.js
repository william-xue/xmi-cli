const fs = require('fs-extra');
const path = require('path');

function clearXmiDir () {
    const xmiDir = path.resolve(process.cwd(), '.xmi');
    if (fs.existsSync(xmiDir)) {
        fs.removeSync(xmiDir);
    }
}

function ensureXmiDir () {
    const xmiDir = path.resolve(process.cwd(), '.xmi');
    if (!fs.existsSync(xmiDir)) {
        fs.mkdirSync(xmiDir, { recursive: true });
    }
}
module.exports = { clearXmiDir, ensureXmiDir };

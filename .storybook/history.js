const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

function fromDirLoop(startPath, filter, callback) {
    if (!fs.existsSync(startPath)) {
        return;
    }

    const files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        const filename = path.join(startPath, files[i]);
        const stat = fs.lstatSync(filename);

        if (stat.isDirectory()) {
            fromDirLoop(filename, filter, callback);
        }
        else if (filter.test(filename)) callback(filename);
    };
};

function readFileHistory(folder, pattern) {
    const fileHistory = {};

    fromDirLoop(folder, pattern, (filename) => {
        const folder = path.dirname(filename);
        const component = `${folder}/index.vue`;

        const history = execSync(`git log --follow --pretty=format:'%ad?breakMe?%s' *${component}`).toString().split(/\r\n|\r|\n/g);

        const key = component.replace(new RegExp('/', 'g'), '-').replace(/\\/g, '-').replace('.', '-');

        if (history[0] && history[0].length > 1) {
            let commits = [];

            for (let i = 0; i < history.length; i++) {
                const commit = history[i].split('?breakMe?');
                
                if (commit.length === 2) {
                    const date = new Date(commit[0].replace('Date:', '').trim());
                    const dateIso = date.toISOString();
                    const dateString = `${dateIso.slice(0, 10)} ${dateIso.slice(11, 16)}`;

                    const info = `[${dateString}] ${commit[1].trim().replace(new RegExp('"', 'g'), '\"')}`;

                    commits.push(info);
                }
            }

            fileHistory[key] = JSON.stringify(`  \n  \n<br>\n## Changelog\n${commits.reverse().join('  \n\n')}`);
        } else {
            fileHistory[key] = '"no history"';
        }
    });

    return fileHistory;
}

module.exports = { readFileHistory };